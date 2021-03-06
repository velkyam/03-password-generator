// all possible characters in a string to practice split
var letteroptions = 'q w e r t y u i o p a s d f g h j k l z x c v b n m'
var upperoptions = 'Q W E R T Y U I O P A S D F G H J K L Z X C V B N M'
var specialoptions = '! @ # $ % ^ & * ( ) _ +'
var numberoptions = '1 2 3 4 5 6 7 8 9 0'

//split to turn strings to arrays
var lettersarray = letteroptions.split(' ');
var specialarray = specialoptions.split(' ');
var numberarray = numberoptions.split(' ');
var upperarray = upperoptions.split(' ');

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  var characters = window.prompt("How many characters do you want your password to have?")

  // Cancel to number of characters
  if (!characters){
    var passAlert = window.alert("You must enter the number of charters!")
  }
  else{
  var special = window.confirm("Would you like special characters?")
  var numbers = window.confirm("Would you like numbers?")
  var upper = window.confirm("Would you like upper case letters?")
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  //TODO: variations of user input, cancel, invalid inputs, cancel
  
  function generateKey(){

  //random letter index
  var letterindex = Math.floor(Math.random()*(lettersarray.length))
  //random upper index
  var upperindex = Math.floor(Math.random()*(upperarray.length))
  // random special character index
  var specialindex = Math.floor(Math.random()*(specialarray.length))
  // random number index
  var numberindex = Math.floor(Math.random()*(numberarray.length))
  
  
  // Yes to all
  if (special && numbers && upper){

    // array of random indexes
    var indexarray = [letterindex,specialindex,numberindex,upperindex]
    // random index to have random order of characters, specials, and numbers
    var randomindex = Math.floor(Math.random()*(indexarray.length))
    
    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else if (randomindex===1){
      var passkey = specialarray[specialindex]
    } else if (randomindex===2) {
      var passkey=numberarray[numberindex]
    } else {
      var passkey=upperarray[upperindex]
    }
    return(passkey)
    }

    // Lower, Special, & Numbers
  else if (special && numbers && !upper){

    var indexarray = [letterindex,specialindex,numberindex]
    var randomindex = Math.floor(Math.random()*(indexarray.length))

    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else if (randomindex===1){
      var passkey = specialarray[specialindex]
    } else {
      var passkey=numberarray[numberindex]
    } 
  
    return(passkey)
    }
    
    //Lower & Specials
  else if (special && !numbers && !upper){

    var indexarray = [letterindex,specialindex]
    var randomindex = Math.floor(Math.random()*(indexarray.length))

    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else {
      var passkey = specialarray[specialindex]
    }
    return(passkey)
    }

    // Lower, Numbers, Upper
  else if (!special && numbers && upper){

    var indexarray = [letterindex,numberindex,upperindex]
    var randomindex = Math.floor(Math.random()*(indexarray.length))

    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else if (randomindex===1) {
      var passkey=numberarray[numberindex]
    } else {
      var passkey=upperarray[upperindex]
    }
    return(passkey)
    }

    // Lower & Upper
  else if (!special && !numbers && upper){

    var indexarray = [letterindex,upperindex]
    var randomindex = Math.floor(Math.random()*(indexarray.length))

    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else {
      var passkey=upperarray[upperindex]
    }
    return(passkey)
    }

    // Lower & Numbers
  else if (!special && numbers && !upper){

    var indexarray = [letterindex,numberindex]
    var randomindex = Math.floor(Math.random()*(indexarray.length))

    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else {
      var passkey=numberarray[numberindex]
    } 
    return(passkey)
    }

    // Lower, Special & Upper
  else if (special && !numbers && upper){

    var indexarray = [letterindex,specialindex,upperindex]
    var randomindex = Math.floor(Math.random()*(indexarray.length))

    if(randomindex===0){
      var passkey = lettersarray[letterindex]
    } else if (randomindex===1){
      var passkey = specialarray[specialindex]
    } else {
      var passkey=upperarray[upperindex]
    }
    return(passkey)
    }
    
    else {

      var randomindex = Math.floor(Math.random()*(letterindex.length))
      var passkey = lettersarray[letterindex]

      return(passkey)
    }

  }
  
  function generatePassword(){
    // store loop values in array
    var newpass = []
   
    for (var i=0; i < characters; i++){
      // push value to the newpass array
      newpass.push(generateKey());
    }

    // remove commas from array
    return newpass.join("");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
