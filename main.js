function sound(src){// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}

function playAccessGranted() {
    mySound = new sound("./Sounds/Robot-Access_Granted.wav");
    mySound.play();
}

function playAccessDenied() {
    mySound = new sound("./Sounds/Robot-Access_Denied.wav");
    mySound.play();
}


function check() { //The check function is ran after the user clicks the submit button
    //Variable declaration
        var usr = document.getElementById('first').value + " " + document.getElementById('last').value;
        var code = document.getElementById('code').value;

    function validName() {
        if (usr.length > 15) { //Checks to see if the user's full name is at least 21 characters and reloads the page if it is not
            validCode();

    }
        else {
            document.getElementById('rslt').innerHTML = "Warning: For security purposes, User Name must be more than 15 characters."
            playAccessDenied();
        }
    }

    function validCode() {
        if (code.length == 5) {
            playAccessGranted();
            document.getElementById('success').innerHTML = "Log In Successful"
            document.getElementById('rslt').innerHTML = "Congratulations!!! You may now continue to the Palindrome Checker App by clicking the link below."
            document.getElementById('lnk').innerHTML = "CLICK HERE TO LAUNCH PALINDROME CHECKER v1.0" 
        }
        else {
            document.getElementById('rslt').innerHTML = "Warning: Invalid Passcode. Passcode must be five numerical digits long."
            playAccessDenied();
        }

    }
validName();
}