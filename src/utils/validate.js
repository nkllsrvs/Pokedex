
const email = (email) => {
    let errors = [];
    let verify = true

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.push('Invalid email address');
        verify = false
    }

    return [
        errors,
        verify
    ];
}
const password = (password) => {
    let errors = [];
    let verify = true

    if (password.length < 6) {
        errors.push('Password must be at least 6 characters');
        verify = false
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
        verify = false
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
        verify = false
    }
    if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number');
        verify = false
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push('Password must contain at least one special character');
        verify = false
    }
    return [
        errors,
        verify
    ];

}
const cpf = (cpfEntrada) => {
    let errors = [];
    let verify = true
    let cpf = cpfEntrada.replace(/[^\d]+/g, '');

    if (cpf.length < 11) {
        errors.push('CPF must be at least 11 characters');
        verify = false
    }
    if (!/\d/.test(cpf)) {
        errors.push('CPF must contain at least one number');
        verify = false
    }
    if (!testaCpf(cpf)) {
        errors.push('CPF is invalid');
        verify = false
    }

    return [
        errors,
        verify
    ];
}


function testaCpf(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}