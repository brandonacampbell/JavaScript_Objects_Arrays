// Exercise 1

let sum = 0;

const numbers = [2, 22, 12, 17, 18, 39, 129];


function arraySum(param){
param.forEach(element => {
    sum += element;
});
return sum;
}

console.log(arraySum(numbers));

//Exercise 2

let book = {
    title: 'To Kill a Mockingbird' ,
    author: 'Harper Lee', 
    pages: 342, 
    read: true,
    readCount: 2, 
};

book.info = function(){
    return `${book.title} by ${book.author},  ${book.pages} pages, read ${book.readCount} times.`
};

console.log(book.info())

//Exercise 3

let testSentence = "The quick brown fox jumps over the lazy dog";
function reverseWords (sentence){
    let arr = sentence.split(" ");
    var result = [];
    for (let word of arr) {
        var chars = word.split('');
        chars.reverse();
        var reversedWord = chars.join('');
        result.push(reversedWord);
    }

    return result.join(' ');
}

console.log(reverseWords(testSentence));

// Exercise 4 
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data){
    let headers = data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n") + 1).split("\n");

    const customArr = valuesList.map((row) => {
        let values = row.split(",");
        let obj = {};

        values.forEach((col, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = col;    
            } else {
                obj[`misc${idx}`] = col;
            }
        });
        return obj;
    });
  return customArr;
}

console.log(csvConverter(csvData));