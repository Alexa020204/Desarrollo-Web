const calculator={
    memory: {
    
        array: [],
        
        push: function (value) {
            this.array.push(value);
        },
        pop: function (){
            return this.array.pop();
        },
        clear: function(){
            this.array =[];
        },   
        isEmpty: function (){
            return this.array.length = 0;
        },
        peek: function (){
            return this.array[this.array.length-1];
        },
        beforePeek: function(){
            return this.array[this.array.length-2];
        }
    }, 
    add: function(a,b) {
        return a+b;
    },
    subtract: function (a,b){
        return a-b;
    },
    multiply: function (a,b){
        return a*b;
    },
    divide: function (a,b){
        return a/b;
    },
    sqrt: function (a){
        return Math.sqrt(a);
    },
    square: function (a){
        return Math.pow(a,2);
    },
    percent: function (a,b){
        return (a/100)*b;
    },
    inverse: function (a){
        return 1/a; 
    }

}

const display = {
    content: document.getElementById('number'),
    limit: 10,
    nchar: 0,
    go: function (value){ //------> La validación para que pueda seguir escribiendo
        return this.nchar < this.limit;   
    },
    add: function (key){
        if (this.go()){
            if (key === 'sign'){
                this.content.value = eval(this.content.value) * -1;
                return;
            }
            if (this.content.value.search(/[.]/) !==-1 && key == '.'){
                return;
            }
            if (this.content.value === '0' && key !==','){
                this.content.value= '';  
    
             }
             this.content.value += key;
             this.nchar++;
        }
    },
    clear: function(){
        this.content.value='';
        this.nchar=0;
    },

    back: function(){
        if(this.content.value!='0' && this.nchar>1){
            this.nchar--;
            this.content.value=this.content.value.slice(0,-1);
        }
        else{
            this.nchar--;
            this.content.value='0';
        }  
    },
    clearLast: function(){
        calculator.memory.pop();
    }
}
function addkeyDisplay(key){
   display.add(key);
}

function cleanDisplay(){
    display.clear();
    display.content.value=0;
}

function backDisplay(){
    display.back();
}

function ceDisplay(){
    display.clearLast;
    display.content.value="";
}

function operationDisplay(opr){  
    const operaciones = ['inverso', 'sqrt', 'exp'];

    if(opr!='igual' && !operaciones.includes(opr)){
        calculator.memory.array.push(display.content.value);
        calculator.memory.array.push(opr);
        display.clear();
        console.log(calculator.memory.array);
    }
    else if(opr==='igual'){
        let a = Number.parseFloat(calculator.memory.beforePeek());
        let b= Number.parseFloat(display.content.value);
        calculator.memory.array.push(b);
        opr=calculator.memory.beforePeek();
        let resultado;
        switch (opr){
            case 'suma':
                resultado=calculator.add(a,b);
                console.log(resultado);
                break;
            case 'resta':
                resultado=calculator.subtract(a,b);
                console.log(resultado);
                break;
            case 'div':
                resultado=calculator.divide(a,b);
                console.log(resultado);
                break;    
            case 'multi':
                resultado=calculator.multiply(a,b);
                console.log(resultado);
                break; 
            case 'porce':
                resultado=calculator.percent(a,b);
                console.log(resultado);
                break; 
        }
        if(resultado.toString().length >10){
            console.log('si entra')
            display.content.value=resultado.toExponential(3);
        }
        else{
            display.content.value=resultado;
        }
        calculator.memory.clear();
        console.log(calculator.memory.array);
    }
    else{
        let resultado;
        switch (opr){
            case 'inverso':
                resultado=calculator.inverse(display.content.value);
                break;
            case 'sqrt':
                resultado=calculator.sqrt(display.content.value);
    
                break;
            case 'exp':
                resultado=calculator.square(display.content.value);
                
                break;
        }
        
        if(resultado.toString().length >10){
            console.log('si entra')
            display.content.value=resultado.toExponential(3);
        }
        else{
            display.content.value=resultado;
        }

    }
    
}




