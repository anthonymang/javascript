function checkInstagram(username) {
    console.log(`Wow! ${username} posted a new picture`)
}
function makePhoneCall(contact) {
    console.log(`Dialing number for ${contact}`)
}
function playSpotify(song) {
    if (song === 'Baby Shark') {
        console.log(`Are you sure you want to play ${song}?`)
    } else {
        console.log(`Now playing ${song}`)
    }
}
function checkEmail(emailProvider) {
    if (emailProvider === "Gmail") {
        console.log("Welcome to your Gmail inbox");
    } else if (emailProvider === "AOL") {
        console.log("Time for an update?");
    } else if (emailProvider === "ProtonMail") {
            console.log("What are you hiding?");
        } else {
            console.log("You've got mail!");
        }
    }


function sendEmail(message) {
    console.log(`${message}`)
}
function sendTextMessage(contact) {
    console.log(`Yo, what's the word ${contact}`);
}
function takePicture(filter) {
    console.log(`Take picture with ${filter} filter`);
}
function faceTime(friend) {
    console.log(`Facetiming my friend ${friend}...`);
}
function useMobileDevice(typeOfPhone, funcName, param) {
    let nameOfFunction = funcName.name;
    if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
        console.log('Facetime is only a feature on iPhones');
        return;
    }
    console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
    funcName(param);
}
// useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
// console.log('---');
// useMobileDevice('Android', faceTime, 'Jake');
// console.log('---');
// useMobileDevice('iPhone', takePicture, 'portrait');


useMobileDevice('Android', checkInstagram, 'ant.mang');

useMobileDevice('iPhone', makePhoneCall, 'Themba');

useMobileDevice('Android', playSpotify, 'NY State of Mind');


function add(num1, num2){
    return num1 + num2;
}

function doubleEachAndAdd(num1, num2){
    return (num1 * 2) + (num2 * 2);
}

function calculator(operation, num1, num2){
    let result = operation(num1, num2);
    return result;
}


calculator(add, 3, 8);

calculator(doubleEachAndAdd, 3, 5);

useMobileDevice("iPhone", checkEmail, "ProtonMail");

useMobileDevice("Android", checkEmail, "Gmail");