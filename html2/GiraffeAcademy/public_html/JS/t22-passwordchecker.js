var password = "123";
var response;
var entryCount = 0;
var error = false;
var entryLimit = 3;

while(response !== password && !error) {
    if(entryCount < entryLimit) {
        response = window.prompt("Enter Password");
        entryCount++;
    } else {
        error = true;
    }
}

if(error) {
    alert("Too many entries");
} else {
    alert("You got it!");
}