document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copy");
    const robotImage = document.getElementById("robot");
    const foundCopied = document.getElementById("no_found_msg_copied");
    const useAsYouWant = document.getElementById("enter_txt");
    const userText = document.getElementById("get_txt_to_encrypt");
    const txtEncrypted = document.getElementById("txtEncrypted");
    const hereEncrypted = document.getElementById("hereIsEncryptedText");

    copyButton.style.display = "none"; // Garantir que o botão esteja invisível ao carregar a página
    txtEncrypted.style.display = "none";
    // Função para mostrar o botão "Copiar" e habilitar a área do texto encriptado
    function showCopyButton() {
        copyButton.style.display = "block";
        robotImage.style.display = "none";
        txtEncrypted.style.display = "block";
        foundCopied.style.display = "none";
        useAsYouWant.style.display = "none";
        hereEncrypted.style.display = "block";
    }

    // Função para esconder o botão "Copiar"
    function hideCopyButton() {
        copyButton.style.display = "none";
        robotImage.style.display = "block";
        foundCopied.style.display = "block";
        useAsYouWant.style.display = "block";
        txtEncrypted.style.display = "none";
        hereEncrypted.style.display = "none";
        foundCopied.innerText = "Texto copiado com sucesso!";
        useAsYouWant.innerText = "Utilize seu texto como quiser!";
    }

    //Função para tornar o texto em letras minúsculas
    function toLowerCase() {
        userText.value = userText.value.toLowerCase(); 
    }

    //Função para tirar os acentos
    function removeAccents() {
        userText.value = userText.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    //Função para limpar o conteúdo da caixa de entrada
    function clearTextArea(){
        userText.value = "";
    }

    //Função para criptografar o texto
    function encrypt() {
        userText.value = userText.value.replace(/a/g,"ai")
                                       .replace(/e/g,"enter")
                                       .replace(/i/g,"imes")
                                       .replace(/o/g,"ober")
                                       .replace(/u/g,"ufat");

        hereEncrypted.innerText = "Aqui está o texto criptografado:"
        txtEncrypted.innerText = `${userText.value}`
    }

    //Função para descriptografar o texto
    function decrypt() {
        userText.value = userText.value.replace(/ufat/g,"u")
                                       .replace(/ober/g,"o")
                                       .replace(/imes/g,"i")
                                       .replace(/enter/g,"e")
                                       .replace(/ai/g, "a");
    }

    // Adicionar evento ao botão "Copiar"
    copyButton.addEventListener("click", function() {
        hideCopyButton();
    });

    // Adicionar eventos aos botões de criptografar e descriptografar
    const encryptButton = document.querySelector(".body-content__boxes__buttons__encrypt-decrypt:nth-child(1)");
    const decryptButton = document.querySelector(".body-content__boxes__buttons__encrypt-decrypt:nth-child(2)");

    encryptButton.addEventListener("click", function() {
        //lógica de criptografia
        toLowerCase();
        removeAccents();
        encrypt();
        clearTextArea();
        showCopyButton();
    });

    decryptButton.addEventListener("click", function() {
        //lógica de descriptografia
        toLowerCase();
        removeAccents();
        decrypt();
        showCopyButton();
    });
});
