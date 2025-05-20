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

    for (let i = 0; i < contarElementos(caracteresEspeciales); i++) {
        if (ultimoCaracter === caracteresEspeciales[i]) {
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

    while (contrasena[i] !== undefined) {
        const caracter = contrasena[i]; 

        const letraMinus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const letraMayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (let i = 0; i < contarElementos(letraMinus); i++) {
            if (caracter === letraMinus[i]) {
                tieneMinus = true;
            }
        }
        for (let i = 0; i < contarElementos(letraMayus); i++) {
            if (caracter === letraMayus[i]) {
                tieneMayus = true;
            }
        }

        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        for (let i = 0; i < contarElementos(numeros); i++) {
            if (caracter === numeros[i]) {
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

    return mailValido === true && passValida === true;
}

console.log(validarUser("hola123@", "abc123ASOJD2"));  // false
console.log(validarUser("jojojojojoj@gmail.com", "holasiunodostres1"));  // true
console.log(validarUser("poncepro22222@outlook.com", "vegetta777"));  // true
