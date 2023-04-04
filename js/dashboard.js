function activePayment(){
    document.getElementById('payment-card').style.display="flex";}
function deactivePayment(){
    document.getElementById('payment-card').style.display="none";}
function activeTransfer(){
    document.getElementById('transfer-card').style.display="flex";}
function deactiveTransfer(){
    document.getElementById('transfer-card').style.display="none";}
function activeDeposit(){
    document.getElementById('deposit-card').style.display="flex";}
function deactiveDeposit(){
    document.getElementById('deposit-card').style.display="none";}
function activeWithdraw(){
    document.getElementById('withdraw-card').style.display="flex";}
function deactiveWithdraw(){
    document.getElementById('withdraw-card').style.display="none";}
function getTransaction(){
    var select=document.getElementById('transact-select');
    if(select.value=="payment"){
        activePayment();
        deactiveTransfer();
        deactiveDeposit();
        deactiveWithdraw();  }else if(select.value=="transfer"){
        activeTransfer();
        deactivePayment();
        deactiveDeposit();
        deactiveWithdraw();  }else if(select.value=="deposit"){
        activeDeposit();
        deactivePayment();
        deactiveTransfer();
        deactiveWithdraw(); }else if(select.value=="withdraw"){
        activeWithdraw();
        deactivePayment();
        deactiveTransfer();
        deactiveDeposit(); }else{
        deactivePayment();
        deactiveTransfer();
        deactiveDeposit();
        deactiveWithdraw();}}