let button=document.getElementById("btn");
button.addEventListener("click",myFunc);
function myFunc(){
    var rate=parseInt(document.getElementById("rate").value);
    var tip=document.getElementById("tips").value;
    var a=parseInt(tip/100*rate);
    document.getElementById("tips-rate").value=a;
    var tot=rate+a;
    document.getElementById("total").value=tot;
    document.getElementById("res").innerText="your total amount is"+tot;
    
}