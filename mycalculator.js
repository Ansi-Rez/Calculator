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

