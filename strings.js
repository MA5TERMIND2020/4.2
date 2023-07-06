function check() { //Contains the logic that gets the user input and checks to see if it is a Palidrome
var acceptedString = '';
var reverseString = '';
var array = [];

while (acceptedString == '') { //Implements a loop to display a prompt for the user to input a string and then manipulates and reverses the string
    string = document.getElementById('first').value;
    if (string.match("^[A-Za-z]")) {
        acceptedString = string;
        acceptedString = acceptedString.toLowerCase();
        acceptedString = acceptedString.replace(/ +/g, "");
        array = acceptedString.split('');
        reverseString = array.reverse();
        reverseString = reverseString.join('');
        if (reverseString == acceptedString) {
            document.getElementById("result").innerHTML = `Congratulations, ${string} is a Palindrome!`;
        }
        else {
            document.getElementById("result").innerHTML = `Sorry, ${string} is not a Palindrome.`;
        }
    }
    else {
        document.getElementById("result").innerHTML = 'Error: You must input a valid string!';
    }
}
}