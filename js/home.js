document.getElementById('add-money-button').addEventListener('click',function(event){
    event.preventDefault();
    const inputAddMoney = document.getElementById('input-add-money').value;
    
    const inputPinNumber = document.getElementById('input-pin').value;
  
    if(inputPinNumber=== '1234'){
        const addMoneyBalance = document.getElementById('balance-amount').innerText;
        const inputNumber = parseFloat(inputAddMoney);
        const balanceNumber = parseFloat(addMoneyBalance);
        const updateBalance = balanceNumber + inputNumber;
        console.log(updateBalance);
        document.getElementById('balance-amount').innerText = updateBalance;
    }
    else{
        alert('wrong pin number')
    }
})