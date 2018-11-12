var essay = document.getElementById("privatetoother");
var username = document.getElementById("userName");
var password = document.getElementById("passWord");
var userpwd = document.getElementById("userApwd");
var submit1 = document.getElementById("submit");
/*userpwd.style.display = "none";*/
var count = 0;
essay.onclick = function(){
    console.log("push");
    userpwd.style.dispaly = "inline";
    count++;
    submit1.onclick = privateLogIn();
}
function privateLogIn(){
    if(count<=3&&username === "14102026" &&password === "stykiss1229"){
        self.location = "privateMessage.html";
    }
}