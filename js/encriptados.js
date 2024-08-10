//seleccionar elementos
const btnEncriptar = document.querySelector(".btn_encriptar");
const textEncriptar = document.querySelector(".text-area");
const aviso = document.querySelector(".info");
const respuestas = document.querySelector(".evaluar");
const contenido = document.querySelector(".respuesta_contenido");
const btnCopiar = document.querySelector(".btn_copiar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");



//btn_encriptar
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt)
//condicionar del aviso
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "No debe tener acento y caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        
        //imprimiendo en el text area
        respuestas.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "inherit";
    }
});


//btn_desencriptar
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt)
//condicionar del aviso
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El campo de texto no debe estar vacío";
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "No debe tener acento y caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontweight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        
        //imprimiendo en el text area
        respuestas.innerHTML = texto;
        contenido.remove();
        btnCopiar.style.visibility = "inherit";
    }
});
//btn_copiar
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuestas;
    copiar.select();
    document.execCommand("copy");
});