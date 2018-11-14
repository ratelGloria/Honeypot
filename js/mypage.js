window.onload = function() {
    var essay = document.getElementById("privatetoother");
    var username = document.getElementById("userName");
    var password = document.getElementById("passWord");
    var userpwd = document.getElementById("userApwd");
    var submit_log_in = document.getElementById("submit_log_in");
    var submit_cancel = document.getElementById("submit_cancel");


    userpwd.style.position = "absolute";
    userpwd.style.display = "none";
    var count = 0;
    essay.onclick = function () {
        console.log("push");
        userpwd.style.display = "block";
    }
    submit_log_in.onclick = function () {
        console.log("我进入了");
        if ("14102026" === username.value && "stykiss1229" === password.value) {
            console.log("我进入了");

        }else{
            return false;
        }
    }

    submit_cancel.onclick = function () {
        userpwd.style.display = "none";
    }

}
var deathImg = document.getElementsByTagName("img");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var ds = [d1,d2,d3];
function imgNone(arr){
    for(var i = 0;i<arr.length;i++){
        arr[i].style.display = "none";
    }
}
imgNone(deathImg);
var timerD;
var count1 = 0;
function deathCode(){
    if(count1>2){
        count1 = 0;
    }
    ds[count1].style.backgroundColor = "blue";
    deathImg[count1].style.display = "block";
    for(var  i = 0;i<ds.length;i++){
        if(i != count1){
            ds[i].style.backgroundColor = "white";
            deathImg[i].style.display = "none";
        }
    }
    count1++;
}

timerD = setInterval("deathCode()",2000);
