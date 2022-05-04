function sumar(){
    var x = parseFloat(document.getElementById('txtnum1').value);
    var y = parseFloat(document.getElementById('txtnum2').value);
    document.formulario.rtdo.value = x+y;
}

function restar(){
    var x = parseFloat(document.getElementById('txtnum1').value);
    var y = parseFloat(document.getElementById('txtnum2').value);
    document.formulario.rtdo.value = x-y;
}

function multiplicar(){
    var x = parseFloat(document.getElementById('txtnum1').value);
    var y = parseFloat(document.getElementById('txtnum2').value);
    document.formulario.rtdo.value = x*y;
}

function dividir(){
    var x = parseFloat(document.getElementById('txtnum1').value);
    var y = parseFloat(document.getElementById('txtnum2').value);
    document.formulario.rtdo.value = x/y;
}