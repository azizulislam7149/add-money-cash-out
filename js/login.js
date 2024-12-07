document.getElementById('login-button').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number')
    const getPhoneNumber = phoneNumber.value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(getPhoneNumber,pinNumber);
    if(getPhoneNumber === '1010' && pinNumber === '1234'){
        console.log('login the site');
        window.location.href= '/home.html'
    }
    else{
        alert('your password is incorrect')
    }
})