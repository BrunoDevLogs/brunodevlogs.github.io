var textbox1 = document.getElementById("textbox1");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    localStorage.name = textbox1.value;
});

document.write(localStorage.name);