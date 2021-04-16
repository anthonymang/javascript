// Timeout exercise - microwave sounds food is ready notif for defined cookLength

function microWave(){
    console.log("BEEP - Food is ready")
}

let cookLength = 15000;
setTimeout(microWave, cookLength);


// Interval exercise - make phone ring every 2 seconds, send to voicemail after 10 rings
function callSound() {
    console.log("Ring!")
}

function goToVoiceMail(){
    clearInterval(phoneCall);
    console.log("Please leave a message after the beep.");
}

const phoneCall = setInterval(callSound, 2000);

setTimeout(goToVoiceMail, 20000);