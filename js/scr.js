//capturamos el boton copiar
var copiar = document.querySelector(".btncopiar");
//capturamos el bt desencriptar
var bdesencriptar = document.querySelector(".desencriptar");
//capturamos el btn encriptar
var bencriptar = document.querySelector(".encriptar")
//para capturar el texto encriptado
var textout = document.getElementById("saltext")
//para capturar el texto ingresado
var textoIn = document.getElementById("enttext");


function encriptado (){
    //capturamos el valor del texto de entrada
    let texto =   textoIn.value;
    let textincrip = [];

    for (let i=0;i<texto.length; i++){

        let  codigo;
        if (texto.charAt(i) == "a") {
            codigo = texto.charAt(i).replace(/a/g, 'ai');
        }
        else if (texto.charAt(i) == "e") {
            codigo = texto.charAt(i).replace(/e/g, 'enter');
        }
        else if (texto.charAt(i) == "i") {
            codigo = texto.charAt(i).replace(/i/g, 'imes');
        }
        else if (texto.charAt(i) == "o") {
            codigo = texto.charAt(i).replace(/o/g, 'ober');
        }
        else if (texto.charAt(i) == "u") {
            codigo = texto.charAt(i).replace(/u/g, 'ufat');
        } else {
            //sino se deja igual
            codigo = texto.charAt(i);
        }
        //Enviamos los los cambios al arreglo
        textincrip.push(codigo);
        //enviamos el array al area de encriptado
        textout.value = textincrip.join("");

    }
    //borramos el texto del textArea
    textoIn.value = "";
}

function desencriptado(){   
    let textoEncriptado = textoIn.value;
    let textoDesencript = textoEncriptado.replace(/enter/gi, "e").replace(/imes/gi, "i")
                .replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
                textout.value   =  textoDesencript; 

}
function copiarTexto() {    
    window.getSelection().removeAllRanges();
    textout.select();
    var res=    document.execCommand('copy');
    alert("Texto copiado");
}
//para resetear el copiar
function resetCopiar(){ 
    copiar.style.borderColor = '#0a3871';
    copiar.style.boxShadow = 'none';
    copiar.style.transform = 'scale(1)';
}
// capturamos el evento onclick para mostar la encriptacion
bencriptar.onclick  =   encriptado;
//capturamos el bt desencriptar
bdesencriptar.onclick   = desencriptado;
//capturamos el evento copiar
copiar.onclick= copiarTexto;


