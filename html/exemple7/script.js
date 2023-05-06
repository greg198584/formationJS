let result = '';

function addToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch {
        alert('Erreur de calcul');
        clearResult();
    }
}
