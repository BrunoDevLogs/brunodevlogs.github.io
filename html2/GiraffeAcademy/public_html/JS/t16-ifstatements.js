var isMale = true;
var isTall = true;

if(isMale && isTall) {
    document.write("You are a tall male");
} else if(isMale && !isTall) {
    document.write("You are a short male");
} else if(!isMale && isTall) {
    document.write("You are not male but are tall");
} else {
    document.write("You are not tall and not male");
}