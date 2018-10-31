var output = document.getElementById('output');
var type = document.getElementById('type');
var late = document.getElementById('late');
var back = document.getElementById('back');
var myInterval = null;
var lateInterval = null;

function countdownCall(num) {
    breakType(num);
    clearInterval(myInterval);
    clearInterval(lateInterval);
    var seconds = 0;
    myInterval = setInterval(function() {
        displayBreakTimer(num, seconds);
        seconds -= 1;
        if (seconds == -1) {
            seconds = 59;
	        num -= 1;
	    }
	    if (num == -1) {
	        displayLateMessage();
	        clearInterval(myInterval);
	    }
	  
    }, 1000);
    back.style.display="block";
}


function displayBreakTimer(num, seconds) {
    if (seconds<10) {
	    output.innerHTML =  "I'll be back in approximately " + num + ":0" + seconds + " minutes";
    }
    else {
	    output.innerHTML =  "I'll be back in approximately " + num + ":" + seconds + " minutes";
    }
}

function displayLateMessage() {
    var seconds = 0;
    var minutes = 0;
    var lateInterval = setInterval(function () {
	    displayLateTimer(minutes, seconds);
	    seconds += 1;
	    if (seconds == 60) {
	        minutes += 1;
	        seconds = 0;
	    }
    }, 1000);
}


function displayLateTimer(minutes, seconds) {
    type.innerHTML = "";
    if (seconds<10) {
		output.innerHTML =  "I'm sorry but I'm currently running " + minutes + ":0" + seconds + " late!";
    }
    else {
		output.innerHTML =  "I'm sorry but I'm currently running " + minutes + ":" + seconds + " late!";
    }
}
    

function breakType(num) {
    if (num>10) {
		type.innerHTML = "I'm currently on lunch.";
    }
    else {
		type.innerHTML = "I'm currently on a " + num + " minute break.";
    }
}


function clearTimer() {
    clearInterval(myInterval);
    clearInterval(lateInterval);
    window.location.reload();
}
