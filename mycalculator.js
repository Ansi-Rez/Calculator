//object literal that holds the functions for the equations
const calculator = 
{
    add : function(a,b)
    {
        return parseInt(a) + parseInt(b);
    },
    subtract : function(a,b)
    {
        return a - b;
    },
    multiply : function(a,b)
    {
        return a * b;
    },
    divide : function(a,b)
    {
        return a/b
    },
    operate: function(a,operator,b)
    {
        switch(operator)
        {
            case '+':
                return this.add(a,b);
                break;
            case '-':
                return this.subtract(a,b);
                break;
            case '*':
                return this.multiply(a,b);
                break;
            case '/':
                return this.divide(a,b);
        }
    }
};

const buttons = document.querySelectorAll("button");
let input; // Used for user input that isn't the operators
let operation; // For the operators
let first; // For the first group numbers in an equation
let second; // For the second group numbers in an equation
let isFirstRemoved = false; // For testing whether or not text should be removed

//For loop that creates event listeners for all of the buttons
for(let i=0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click",()=>
    {
        let text = document.querySelector("#input");


        if(buttons[i].innerText == '=' && typeof first !== 'undefined' && text.value.toString() !== '')
        {
            second = parseFloat(text.value);
            if(operation == '/' && second == 0)
            {
                text.value = "You cannot divide by zero! Press clr now to enter new values."
                first = undefined;
                second = undefined;
                operation = '';
            }
            else
            {
            text.value = calculator.operate(first,operation,second);
            operation = '';
            }
        }
        else if(buttons[i].innerText == '+' && text.value.toString() !== '')
        {
            
            if(operation === '' || typeof(operation) == 'undefined')
            {
                first = parseFloat(text.value);
                isFirstRemoved = false;
                operation = '+';
            }
            else
            {
                second = parseFloat(text.value);
                text.value = calculator.operate(first,operation,second);
                operation = '';
            }
        }
        else if(buttons[i].innerText == '-' && text.value.toString() !== '')
        {
            if(operation == '' || typeof(operation) == 'undefined')
            {
                first = parseFloat(text.value);
                isFirstRemoved = false;
                operation = '-';
            }
            else
            {
                second = parseFloat(text.value);
                text.value = calculator.operate(first,operation,second);
                operation = '';
            }
        }
        else if(buttons[i].innerText == '*' && text.value.toString() !== '')
        {
            if(operation == '' || typeof(operation) == 'undefined')
            {
                first = parseFloat(text.value);
                isFirstRemoved = false;
                operation = '*';
            }
            else
            {
                second = parseFloat(text.value);
                text.value = calculator.operate(first,operation,second);
                operation = '';
            }
        }
        else if(buttons[i].innerText == '/' && text.value.toString() !== '')
        {
            if(operation == '' || typeof(operation) == 'undefined')
            {
                first = parseFloat(text.value);
                isFirstRemoved = false;
                operation = '/';
            }
            else
            {
                second = parseFloat(text.value);
                text.value = calculator.operate(first,operation,second);
                operation = '';
            }
        }
        else if(buttons[i].innerText == 'clr')
        {
            text.value = "";
            isFirstRemoved = false;
            first = undefined;
            second = undefined;
            operation = '';
        }
        else
        {
            
        input = buttons[i].innerText;

        if(operation == '' || typeof(operation) == 'undefined')
        {
            text.value = text.value + input;
        }
        else
        {
            if(!isFirstRemoved)
            {
            text.value = '';
            text.value = input;
            isFirstRemoved = true;
            }
            else
            {
            text.value = text.value + input;
            }
        }
        }
    });
}