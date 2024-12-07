document.getElementById('add-cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log(435)

    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOutInput, cashOutPin);
    if(cashOutPin === '1234'){
        const currentBalance = document.getElementById('balance-amount').innerText;
        const balance = parseFloat(currentBalance);
        const inputBalance = parseFloat(cashOutInput);
        const updateBalance = balance - inputBalance;
        console.log(updateBalance);
        document.getElementById('balance-amount').innerText= updateBalance;
    }
    else{
       alert('correct your pin') 
    }
})