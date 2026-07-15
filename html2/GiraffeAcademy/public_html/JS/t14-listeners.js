function handleClick(element) {
    alert("Clicked!");
    element.style = "background-color: aquamarine";
}

var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
    this.style = "box-shadow: 10px 10px 10px grey";
    this.width = "700";
});

image.addEventListener("mouseout", function () {
    this.style = "";
    this.width = "500";
});