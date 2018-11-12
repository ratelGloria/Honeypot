var essay = document.getElementById("privatetoother");
var username = document.getElementById("userName");
var password = document.getElementById("passWord");
var userpwd = document.getElementById("userApwd");
var submit1 = document.getElementById("submit");
userpwd.style.position = "absolute";
userpwd.style.display = "none";
var count = 0;
essay.onclick = function(){
    console.log("push");
    userpwd.style.display = "block";

}
function privateLogIn(){
    if(count<=3&&username === "14102026" &&password === "stykiss1229"){
        self.location = "privateMessage.html";
    }
}