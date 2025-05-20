function contarElementos(lista) {
    let i = 0;
    while (lista[i] !== undefined) {
        i++;
    }
    return i;
}

function verificarEmail(email) {
    let i = 0;
    let arrobas = 0;
    let puntoDspArroba = false;
    let posicionArroba = -1;
    let ultimoCaracter = '';

    while (email[i] !== undefined) {
        const caracter = email[i];

        if (caracter === "@") {
            arrobas++;
            posicionArroba = i;
        }

        if (posicionArroba !== -1 && i > posicionArroba && caracter === ".") {
            puntoDspArroba = true;
        }

        ultimoCaracter = caracter;
        i++;
    }

    if (email[0] === "@" || email[0] === ".") {
        return false;
    }

    const caracteresEspeciales = [' ', ',', ';', ':', '!', '?', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '='];
    let signoEspecial = false;

    for (let j = 0; j < contarElementos(caracteresEspeciales); j++) {
        if (ultimoCaracter === caracteresEspeciales[j]) {
            signoEspecial = true;
        }
    }

    if (signoEspecial === true) {
        return false;
    }

    if (arrobas !== 1 || puntoDspArroba === false) {
        return false;
    }

    return true;
}

function verificarContraseña(contrasena) {
    let i = 0;
    let tieneLetra = false;
    let tieneNumero = false;
    let tieneMayus = false;
    let tieneMinus = false;

    const letrasMinus = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const letrasMayus = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const numeros = ['0','1','2','3','4','5','6','7','8','9'];

    while (contrasena[i] !== undefined) {
        const caracter = contrasena[i];

        for (let j = 0; j < contarElementos(letrasMinus); j++) {
            if (caracter === letrasMinus[j]) {
                tieneLetra = true;
                tieneMinus = true;
            }
        }

        for (let j = 0; j < contarElementos(letrasMayus); j++) {
            if (caracter === letrasMayus[j]) {
                tieneLetra = true;
                tieneMayus = true;
            }
        }

        for (let j = 0; j < contarElementos(numeros); j++) {
            if (caracter === numeros[j]) {
                tieneNumero = true;
            }
        }

        i++;
    }

    if (i < 8) { 
        return false;
    }

    if (tieneLetra === false || tieneNumero === false) {
        return false;
    }

    return true;
}

function validarUser(mail, pass) {
    const mailValido = verificarEmail(mail);
    const passValida = verificarContraseña(pass);

    if (mailValido === true && passValida === true) {
        return true;
    } else {
        return false;
    }
}

function validarNombre(nombre) {
    const numeros = "1234567890"
    let i = 0;
    while (nombre[i] !== undefined) {
        i++;
        for (let i = 0; i < contarElementos[i]; i++) {
            if (nombre[i] === contarElementos[i]) {
                return "Nombre invalido"
                
            }
            
        }
    }
    
        
        
        
    }

const usuarios = [
    { email: "juan@example.com", password: "abc12345", nombre: "Juan9" },
    { email: "mal@correo", password: "1234567", nombre: "Mal" },
    { email: "@nada.com", password: "abcd", nombre: "Nada" }
  ];

console.log(validarUser(usuarios[0].email, usuarios[0].password)); 
console.log(validarUser(usuarios[1].email, usuarios[1].password));  
console.log(validarUser(usuarios[2].email, usuarios[2].password)); 

console.log(validarNombre(usuarios[0].nombre));

