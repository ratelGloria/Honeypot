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
        if (username === "14102026" && password === "stykiss1229") {
            console.log("我进入了");
            window.location.href = 'https://ratelgloria.github.io/Honeypot.github.io/pages/privateMessage.html';
            self.location = "privateMessage.html";
        }
    }

    submit_cancel.onclick = function () {
        userpwd.style.display = "none";
    }

}

