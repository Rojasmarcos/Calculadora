let form = document.getElementById("Calculadora");
const peso = document.getElementById("peso")
const CALCULAR = document.getElementById('Calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
    const DATO = peso.value
    console.log(peso.value)
    if (DATO > 0) {
        ERROR.style.display = 'none'
        let flujo;
        if (DATO >= 30) {
            let superficieCorporal = calcularSuperficieCorporal(DATO)
            FLU.innerHTML=superficieCorporal*1500 + "cc/hr";
            FLU.innerHTML+=superficieCorporal*2000 + "cc/hr";
        } else {
            flujo = calcFlujo(DATO);
            let mantenimiento = flujo * 1.5;
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        }


        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    function calcFlujo(peso) {
        let resto = peso;
        let flujo = 0;
        if (resto > 20) {
            let aux = resto - 20;
            flujo += aux * 1;
            resto -= aux;
        }
        if (resto > 10) {
            let aux = resto - 10;
            flujo += aux * 2;
            resto -= aux;
        }
        flujo += resto * 4;
        return flujo;
    }




})
function calcularSuperficieCorporal(peso) {
    let superficieCorporal = ((peso * 4) + 7) / (peso + 90)
    return superficieCorporal

}





