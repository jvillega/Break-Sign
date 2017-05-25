var output = document.getElementById('output');
var type = document.getElementById('type');
var late = document.getElementById('late');
var myInterval = null;

function countdownCall(num) {
    breakType(num); // call to display what type of break
    clearInterval(myInterval);
    var sixty = 0;
    myInterval = setInterval(function() {
	countdownReturn = countdown(num, sixty);
	sixty -= 1;
	if (countdownReturn) {
	    num -= 1;
	    sixty = 59;
	    if (num == -1) {
		displayLateMessage();
		clearInterval(myInterval);
	    }
	}
    }, 1000);
}


function displayLateMessage() {
    var sec = 0;
    var min = 0;
    var lateInterval = setInterval(function () {
	displayLateTimer(sec, min);
	sec += 1;
	if (sec==60) {
	    min += 1;
	    sec = 0;
	}
    }, 1000);

    output.style.display = 'none'
    loadEndOfTimerMessage()
}


function countdown(num, sixty) {
    var d = new Date();
    second = (59-d.getSeconds());
    
    // check if second < 10, so a zero can be added to the display
    if (sixty<10) {
	output.innerHTML =  "I'll be back in approximately " + num + ":0" + sixty + " minutes";
    }
    else {
	output.innerHTML =  "I'll be back in approximately " + num + ":" + sixty + " minutes";
    }

    // check for zero seconds to update minute (AKA num)
    if (sixty == 0) {
	return true;
    }
    else {
	return false;
    }
}


// Reload page to clear timer. A bit of a hack but it works
function clearTimer() {
    window.location.reload();
}


function breakType(num) {
    if (num>15) {
	type.innerHTML = "I'm currently on Lunch.";
    }
    else {
	type.innerHTML = "I'm currently on a " + num + " minute break.";
    }
}


function loadEndOfTimerMessage() {
    type.innerHTML = "I'm sorry, but I'm currently running ";
}


function displayLateTimer(sec, min) {
    if (sec < 10) {
	output.innerHTML = min + ":0" + sec + " minutes late!";
    }
    else {
	output.innerHTML = min + ":" + sec + " minutes late!";
    }
    output.style.display = 'inline'
}
