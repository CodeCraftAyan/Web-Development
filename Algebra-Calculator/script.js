class AlgebraCalculator{
    constructor(){
        this.resultElement = document.getElementById('result');
        this.inputCElement = document.querySelector('.input3');
        this.formula = document.getElementById('formula');
        this.historyElement = document.getElementById('historyList');

        this.history = [];

        this.formula.addEventListener('change', () => this.thirdInputVisibiliy());
        
        document.getElementById('resetButton').addEventListener('click', () => this.reset()); 
        document.getElementById('clearHistoryButton').addEventListener('click', () => this.clearHistory());
    }

    thirdInputVisibiliy(){
        const formula = this.formula.value;
        
        if(formula === '(a+b+c)^2'){
            this.inputCElement.style.display = 'block';
        }else{
            this.inputCElement.style.display = 'none';
        }
    }
    
    calculator(){
        const formula = this.formula.value;
        const a = parseFloat(document.getElementById('a').value) || 0;
        const b = parseFloat(document.getElementById('b').value) || 0;
        const c = parseFloat(document.getElementById('c').value) || 0;
        
        let result = '';

        switch (formula) {
            case '(a+b)^2':
                result = `Result: ${(a + b) ** 2}`;
                break;
            case '(a-b)^2':
                result = `Result: ${(a - b) ** 2}`;
                break;
            case '(a+b)(a-b)':
                result = `Result: ${a ** 2 - b ** 2}`;
                break;
            case '(x+a)(x+b)':
                result = `Result: x² + ${(a + b)}x + ${a * b}`;
                break;
            case '(a+b+c)^2':
                result = `Result: ${a ** 2 + b ** 2 + c ** 2 + 2 * a * b + 2 * b * c + 2 * c * a}`;
                break;
            case '(a+b)^3':
                result = `Result: ${(a + b) ** 3}`;
                break;
            case '(a-b)^3':
                result = `Result: ${(a - b) ** 3}`;
                break;
            case 'a^3-b^3':
                result = `Result: ${(a - b) * (a ** 2 + a * b + b ** 2)}`;
                break;
            case 'a^3+b^3':
                result = `Result: ${(a + b) * (a ** 2 - a * b + b ** 2)}`;
                break;
            default:
                result = 'Please select a valid formula.';
        }

        this.displayResult(result);
        this.historySave(formula, result);
    }

    displayResult(result){
        this.resultElement.innerText = result;
    }

    reset(){
        document.getElementById('formulaForm').reset();
        this.inputCElement.style.display = 'none';
        this.resultElement.innerText = 'Result will appear here';
        this.history = [];
        this.historyElement.innerHTML = '';
    }

    historySave(formula, result){
        const historyItem = {formula, result};
        this.history.push(historyItem);

        const historyItemShow = document.createElement('li');
        historyItemShow.innerHTML = `<strong>${formula}</strong> = ${result}`;

        this.historyElement.appendChild(historyItemShow);
    }

    clearHistory(){
        this.history = [];
        this.historyElement.innerHTML = '';
    }
}

const calculator = new AlgebraCalculator();
