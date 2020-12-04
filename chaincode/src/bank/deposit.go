
package bank

import (
	"encoding/json"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	sc "github.com/hyperledger/fabric/protos/peer"
	"github.com/shopspring/decimal"
)


func (s *BankChaincode) deposit(stub shim.ChaincodeStubInterface, args []string) sc.Response {

	accNum := args[0]
	amount, err := decimal.NewFromString(args[1])

	if err != nil {
		return shim.Error("Second argument (Amount to deposit) must be a number. Error: " + err.Error())
	}

	if amount.LessThanOrEqual(decimal.NewFromFloat(0.0)) {
		return shim.Error("Second argument (Amount to deposit) must be a positive number")
	}

	//get the account to operate on
	accountAsByes := s.queryAccount(stub, []string{accNum}).Payload
	acc := &account{}
	err = json.Unmarshal(accountAsByes, acc)

	if err != nil {
		return shim.Error("Unable to retrieve to account ID from ledger " + err.Error())
	}

	acc.Balance = acc.Balance.Add(amount)

	// write changes to ledger
	accAsBytes, _ := json.Marshal(acc)
	err = stub.PutState(acc.AccNumber, accAsBytes)
	if err != nil {
		return shim.Error("Error trying to commit account to ledger" + err.Error())
	}

	return (shim.Success(nil))

}
