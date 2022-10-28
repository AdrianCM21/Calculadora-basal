const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener( 'click', () => {
    const DATO = document.getElementById('peso').value;
    if (DATO > 0) {
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = Math.round(flujo * 1.5); 
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 : ' + mantenimiento + 'cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        setTimeout(() => {
            ERROR.style.display = 'none';
        }, 5000);
    }
});

function calcFlujo(kg) {
    let resto = kg;
    let flujo = 0;
    if (resto <= 10) {
        flujo = resto * 100;
    } else if (resto <= 20) {
        flujo = 1000 + (resto - 10) * 50;
    } else {
        flujo = 1000 + 500 + (resto - 20) * 20;
    }
    flujo = Math.round(flujo / 24);
    return flujo;
}