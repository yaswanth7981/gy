var randomNumber = Math.floor(Math.random() * 100)+1;
var attempts = 0;
document.getElementById("submit").addEventListener("click", function(){
    var guess = parseInt(document.getElementById("number").value);
attempts++;

if (guess === randomNumber){
    displayMessage("Congratulations! you gueesed the number in"+ attempts + "attempys.");
    document.getElementById("submit").disabled=true;
}
else if(guess < randomNumber){
    displayMessage("Too low! try a higher number");
}
else{
    displayMessage("Two high! try a lower number.");
}
});
function displayMessage(message){
    document.getElementById("message").textContent=message;
}