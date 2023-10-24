const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const cpfInput = document.querySelector("#cpf");
const idadeInput = document.querySelector("#idade");
const telefoneInput = document.querySelector("#telefone");
const dataNascimentoInput = document.querySelector("#dataNascimento");
const confirmaSenhaInput = document.querySelector("#confirmaSenha");
const jsonOutput = document.querySelector("#jsonOutput");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nomeInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o e-mail está preenchido e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email corretamente");
        return;
    }

    // Verifica se a senha está preenchida
    if (!validatePassword(senhaInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }

    // Verifica se o CPF está vazio
    if (cpfInput.value === "") {
        alert("Por favor, preencha o seu CPF");
        return;
    }

    // Verifica se a idade está preenchida
    if (idadeInput.value === "") {
        alert("Por favor, preencha a sua idade");
        return;
    }

    // Verifica se o telefone está vazio
    if (telefoneInput.value === "") {
        alert("Por favor, preencha o seu telefone");
        return;
    }

    // Verifica se a data de nascimento está preenchida
    if (dataNascimentoInput.value === "") {
        alert("Por favor, preencha a sua data de nascimento");
        return;
    }

    // Verifica se a confirmação da senha está preenchida
    if (confirmaSenhaInput.value === "") {
        alert("Por favor, preencha a confirmação da senha");
        return;
    }

    // Verifica se as senhas coincidem
    if (senhaInput.value !== confirmaSenhaInput.value) {
        alert("As senhas não coincidem.");
        return;
    }

    // Se todos os campos são válidos
    if (form.checkValidity()) {
        const formData = {
            nome: nomeInput.value,
            email: emailInput.value,
            senha: senhaInput.value,
            cpf: cpfInput.value,
            idade: idadeInput.value,
            telefone: telefoneInput.value,
            dataNascimento: dataNascimentoInput.value,
        };

        // Converte para string JSON
        const jsonData = JSON.stringify(formData, null, 2);

        // JSON na textarea
        jsonOutput.value = jsonData;
    }
});

// Função que valida e-mail
function isEmailValid(email) {
    // Cria uma regex para validar email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    return password.length >= minDigits;
}