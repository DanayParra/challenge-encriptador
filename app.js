const textoUsuario = document.querySelector('.textoUsuario');
const mensaje = document.querySelector('.mensaje');

//botones encriptar y desencriptar
function botonEncriptar(){
    const textoEncriptado = encriptar(textoUsuario.value)
    mensaje.value = textoEncriptado
    textoUsuario.value = "";
    mensaje.style.backgroundImage = "none"
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textoUsuario.value)
    mensaje.value = textoEncriptado
    textoUsuario.value = "";
}

//funciones encriptar y desencriptar
function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

//boton de copiar
function copiar(){
    var origen = document.getElementById('mensaje');
    var destino = document.getElementById('textoUsuario');
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = origen.value;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
    destino.focus();
    document.execCommand('paste');
}

//habilitar boton desencriptar
function habilitarDesencriptador(){
    
}