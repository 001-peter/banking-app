var balance = 1000
function deposit(){
    var amountEntered = Number(userInput.value)
    if(amountEntered<0){
        alert("thief")
    }else{
        balance = amountEntered + balance
        alert("Deposit Successful and your new balance is $" + balance)
    }
    
}
function makdep(){
    window.location.href = "deposit.html"
}
function trans(){
    window.location.href = "transfer.html"
}
function transfer(){
    var amountEntered = Number(userInput.value)
    if(amountEntered>balance){
        alert("Insufficient fund, sapa no do you well o!")
    }else if(amountEntered<0){
        alert("Out of bounds")
    }else if(amountEntered==""){
        alert("Kindly enter an amount")
    }else{
        balance = balance - amountEntered
        alert("Transfer Successful and your current balance is $" + balance)
    } 
}

function logout(){
    window.location.href = "logout.html"
}