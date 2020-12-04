
package bank

import (
	"encoding/json"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	sc "github.com/hyperledger/fabric/protos/peer"
	"github.com/shopspring/decimal"
)

type BankChaincode struct {
}

type bank struct {
	Name              string `json:"name"`
	ID                string `json:"bankID"`
	ForexContract     string `json:"forexContract"`
	InterbankContract string `json:"interbankContract"`
}

type account struct {
	Name      string          `json:"name"`
	AccNumber string          `json:"id"`
	Balance   decimal.Decimal `json:"balance"`
	Currency  string          `json:"currency"`
}

type forexPair struct {
	Pair string  `json:"pair"`
	Rate float64 `json:"rate"`
}

func (s *BankChaincode) Init(stub shim.ChaincodeStubInterface) sc.Response {
	args := stub.GetStringArgs()
	if len(args) < 2 {
		return shim.Error("Incorrect arguments. Expecting a bank name, ID. Optionally and the name of the ForexContract and the name of the InterBank contract")
	}

	name := args[0]
	id := args[1]
	forexContract := ""
	interbankContract := ""

	if len(args) > 2 {
		forexContract = args[2]
	}

	if len(args) > 3 {
		interbankContract = args[3]
	}

	bank := bank{Name: name, ID: id, ForexContract: forexContract, InterbankContract: interbankContract}

	bankBytes, _ := json.Marshal(bank)
	err := stub.PutState("bank", bankBytes)

	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}

//Invoke is called when external applications invoke the smart contract
func (s *BankChaincode) Invoke(stub shim.ChaincodeStubInterface) sc.Response {
	function, args := stub.GetFunctionAndParameters()

	if function == "createAccount" {
		return s.createAccount(stub, args)
	} else if function == "queryAccount" {
		return s.queryAccount(stub, args)
	} else if function == "transfer" {
		return s.transfer(stub, args)
	} else if function == "deposit" {
		return s.deposit(stub, args)
	} else if function == "getTransactionHistory" {
		return s.getTransactionHistory(stub, args)
	}

	return shim.Error("Invalid function")
}
