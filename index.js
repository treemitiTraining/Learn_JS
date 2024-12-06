let i = 0;
let userInput = +prompt();

while (userInput > i) {
    let j = 0;
    while (userInput >= j) {
        document.write("*");
        j++;
    }
    document.write("<br/>")
    i++;
}