var display = document.getElementById("box-1");
var operator = null;
var op1 = null;
var op2 = null;
var buttonsArray = document.getElementsByClassName("box");
console.log(buttonsArray);

for (var i = 0; i < buttonsArray.length; i++) {
    console.log(buttonsArray[i]);
    buttonsArray[i].addEventListener("click", calculate);
}

function calculate() {
    var value = this.getAttribute("data-value");
    console.log(value);
    if (value == "AC") {
        op1 = null;
        op2 = null;
        display.textContent = null;
    }
    else if (value == '+' || value == '-' || value == '*' || value == '/') {
        op1 = parseFloat(display.textContent);
        if (op1 == null)
            display.textContent = null;
        display.textContent = null;
        operator = value;
    }
    else if (value == "=") {

        op2 = parseFloat(display.textContent);
        // console.log(op1);

        if (op1 != null) {
            var result = eval(op1  + operator +  op2);
            display.textContent = result;
        }
    }
    else if (value == "%") {
        op = parseFloat(display.textContent);
        if (op1 == null) {
            display.textContent = (op/100);
        }
        else {
            op2=op1*(op/100);
            display.textContent=op2;
        }
        
    }
    else {
        if (value == "sign") {
            display.textContent = "-" + display.textContent;
        }
        else {
            display.textContent += value;
        }
    }
}

