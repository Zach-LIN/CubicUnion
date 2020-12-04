
package bank

import (
	"encoding/json"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	sc "github.com/hyperledger/fabric/protos/peer"
	"github.com/shopspring/decimal"
)


func (s *BankChaincode) createAccount(stub shim.ChaincodeStubInterface, args []string) sc.Response {
	if len(args) != 4 {
		return shim.Error("Incorrect arguments, expecting customer name, account number, balance and, currency")
	}

	balance, decimalError := decimal.NewFromString(args[2])

	if decimalError != nil {
		return shim.Error("Unable to parse account balance")
	}

	account := account{Name: args[0], AccNumber: args[1], Balance: balance, Currency: args[3]}

	//serialize account
	accountBytes, _ := json.Marshal(account)

	//Add account to ledger
	putStateErr := stub.PutState(args[1], accountBytes)

	if putStateErr != nil {
		return shim.Error("Failed to create bank")
	}

	return shim.Success(nil)

}

// queryAccount returns a record for an account
//Args:
//	AccNumber string          The account number
func (s *BankChaincode) queryAccount(stub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting the account number")
	}

	accountAsBytes, stubError := stub.GetState(args[0])

	if stubError != nil {
		return shim.Error(stubError.Error())

	}

	return (shim.Success(accountAsBytes))
}
