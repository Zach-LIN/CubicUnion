
package bank

import (
	"encoding/json"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	sc "github.com/hyperledger/fabric/protos/peer"
)

type Transaction struct {
	Timestamp int64  `json: timestamp`
	Value     string `json: value`
}

type Transactions struct {
	History []Transaction `json: transactions`
}

func (s *BankChaincode) getTransactionHistory(stub shim.ChaincodeStubInterface, args []string) sc.Response {

	accNumber := args[0]

	resultsIterator, err := stub.GetHistoryForKey(accNumber)

	if err != nil {
		return shim.Error("Unable to get key history " + err.Error())
	}

	transactions := Transactions{History: []Transaction{}}

	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return shim.Error(err.Error())
		}

		transaction := Transaction{Timestamp: queryResponse.Timestamp.GetSeconds(), Value: string(queryResponse.Value[:])}
		transactions.History = append(transactions.History, transaction)
	}

	b, err := json.Marshal(transactions)
	return shim.Success(b)
}
