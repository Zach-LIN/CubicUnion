
package bank

import (
	"encoding/json"
	"github.com/google/uuid"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"github.com/shopspring/decimal"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestPay(t *testing.T) {

	bankStub := shim.NewMockStub("bank", new(BankChaincode))

	uid := uuid.New().String()

	response := bankStub.MockInit(uid, [][]byte{[]byte("CloudBank"), []byte("0001"), []byte("forex")})
	assert.EqualValues(t, shim.OK, response.GetStatus(), "failed to execute invocation")

	uid = uuid.New().String()
	response = bankStub.MockInvoke(uid, [][]byte{[]byte("createAccount"),
		[]byte("Bob Jones"), []byte("0001"), []byte("0"), []byte("USD")})

	assert.EqualValues(t, shim.OK, response.GetStatus(), "failed to execute invocation")

	//perform transfer
	uid = uuid.New().String()
	response = bankStub.MockInvoke(uid, [][]byte{[]byte("deposit"), []byte("0001"), []byte("500")})
	assert.EqualValues(t, shim.OK, response.GetStatus(), "failed to execute invocation")

	//query from account
	uid = uuid.New().String()
	response = bankStub.MockInvoke(uid, [][]byte{[]byte("queryAccount"),
		[]byte("0001")})

	assert.EqualValues(t, shim.OK, response.GetStatus(), "failed to execute invocation")

	acc := &account{}

	err := json.Unmarshal(response.GetPayload(), acc)

	if err != nil {
		panic(err)
	}

	validateBalance, _ := decimal.NewFromString("500")
	assert.Equal(t, validateBalance, acc.Balance, "incorrect balance")
}
