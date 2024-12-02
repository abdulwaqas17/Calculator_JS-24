// var a = 15.67;
// console.log(typeof(a));

function clicked(e) {
    console.log(e);

    // to show in display 
    document.getElementById('display').value += e;

}

// for calculation 
function calculate() {

    var expression = document.getElementById('display');
    console.log(expression.value);
    // console.log(parseInt(expression));
    // document.getElementById('display').value = expression;

    console.log(eval(expression.value));

    expression.value = eval(expression.value);
}

// for clear the screen 
function clearAll() {

    var values = document.getElementById('display');
    values.value = "  ";
    console.log(values.value + 'hello');

}


// for clearLastOne 
function clearLastOne() {



    // --------------  1st way 
    var input = document.getElementById('display').value;
    var newInput = input.slice(0,-1);
    // var newInput = input.slice(0,input.length-1);
    document.getElementById('display').value = newInput;


    // --------------  2nd way 
    // var input = document.getElementById('display').value;
    // var InArray = input.split('');
    // // console.log(InArray);
    // InArray.splice(InArray.length-1,1);
    // // console.log(InArray);
    // var newInput = InArray.join('');
    // console.log(newInput);

    // // now assign in screen 
    // document.getElementById('display').value = newInput;



}

// %^³²√
/* 

const str = "hello";
const arr = str.split(""); // ["h", "e", "l", "l", "o"]
arr.splice(2, 0, "x"); // ["h", "e", "x", "l", "l", "o"]
const newStr = arr.join(""); // "hexllo"




JavaScript mein eval() function ka istemaal kiya jata hai ek string ko JavaScript code mein convert karne ke liye. Yeh function string ko parse karta hai aur usse JavaScript code mein badalta hai, phir us code ko execute karta hai.

Udaaharan ke liye:

const x = 10;
const y = 20;

const result = eval("x + y");
console.log(result); // Output: 30

Is example mein, eval() function string "x + y" ko parse karta hai aur usse JavaScript code mein badalta hai. Phir yeh code execute hota hai aur result 30 hota hai.
*/
