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

for(let i=0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click",()=>
    {
        let text = document.querySelector("#input");

        if(buttons[i].innerText == '=')
        {
            let breakpoint = /[+\-*/]/;
            let textinput = text.value.toString();
            let operation = textinput.split(breakpoint);
            let sign;
            for(let j=0; j < textinput.length; j++)
            {
                if(textinput[j] == '+' || textinput[j] == '-' || textinput[j] == '*' || textinput[j] == '/')
                {
                    sign = textinput[j];
                }
            }

            text.value = calculator.operate(operation[0],sign,operation[1]);
        }
        else if(buttons[i].innerText == 'clr')
        {
            text.value = "";
        }
        else{
        let input = buttons[i].innerText;
        
        text.value = text.value + input;
        }
    });
}