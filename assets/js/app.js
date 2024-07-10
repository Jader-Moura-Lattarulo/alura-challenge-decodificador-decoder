document.addEventListener("DOMContentLoaded", function() {
    let userText = document.getElementById("get_txt_to_encrypt");
    let enterText = document.getElementById("type-here");
    let foundCopied = document.getElementById("no_found_msg_copied");
    let robotImage = document.getElementById("robot");
    let useAsYouWant = document.getElementById("enter_txt");
    let hereEncryptedDecrypted = document.getElementById("outputTitle"); //Usar o hereIs aqui
    let txtEncryptedDecrypted = document.getElementById("txtEncryptedDecrypted");
    let copyButton = document.getElementById("copy");
    let hereEncrypted = document.getElementById("hereIsEncryptedText");
    let txtWillBeCopied = document.getElementById("txtEncryptedDecrypted");

    copyButton.style.display = "none"; // Garante que o botão esteja invisível ao carregar a página
    txtEncryptedDecrypted.style.display = "none";
    hereEncryptedDecrypted.style.display = "none";

    // Função para mostrar o botão "Copiar", habilitar a área do texto encriptado para copia, o robo sumir e aparecer textos
    function showCopyButton() {
        copyButton.style.display = "block"; 
        robotImage.style.display = "none";
        hereEncryptedDecrypted.style.display = "block";
        txtEncryptedDecrypted.style.display = "block";
        foundCopied.style.display = "none";
        useAsYouWant.style.display = "none";
    }

    // Função para esconder o botão "Copiar", aparecer o robo e textos
    function hideCopyButton() {
        hereEncryptedDecrypted.style.display = "none";
        copyButton.style.display = "none";
        robotImage.style.display = "block";
        foundCopied.style.display = "block";
        useAsYouWant.style.display = "block";
        txtEncryptedDecrypted.style.display = "none";
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

    //Função para verificar se a entrada está vazia
    function isEmpty(){
        if (!userText.value || userText.value.trim() === "") {
            enterText.value = "É preciso ter algum texto para a máquina funcionar.";
            enterText.innerHTML = enterText.value;
            return true;
        }
        enterText.value = "Digite aqui...";
        enterText.innerHTML = enterText.value;
        return false;
    }
    //Função para não repetir frase
    function isNeeded(moreThan){
        return `É preciso ter algo além de ${moreThan} para a máquina funcionar.`;
    }

    //Função para verificar se a entrada está só com caracteres especiais ou números
    function isSpecialCharactersOrNumbers() {
        const text = userText.value;
        const specialCharacters = /^[^\w\s]+$/;
        const onlyNumbers = /^\d+$/;
        const isSpecialCharAndNumbers = /^[\d\W]+$/;
        
        if (specialCharacters.test(text)) {
            let moreThan = "caracteres especiais"
            enterText.value = isNeeded(moreThan);
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        } else if (onlyNumbers.test(text)) {
            let moreThan = "números"
            enterText.value = isNeeded(moreThan);
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        } else if (isSpecialCharAndNumbers.test(text)) {
            let moreThan = "números e caracteres especiais"
            enterText.value = isNeeded(moreThan);
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        } else {
            return false;
        }
    }
    
    //Função para criptografar textos
    function encrypt() {
        userText.value = userText.value.replace(/a/g,"ai")
                                       .replace(/e/g,"enter")
                                       .replace(/i/g,"imes")
                                       .replace(/o/g,"ober")
                                       .replace(/u/g,"ufat")
                                       

        hereEncrypted.innerText = "Aqui está o texto criptografado:"
        txtEncrypted.innerText = `${userText.value}`
    }

    //Função para criptografar textos
    function decrypt() {
        userText.value = userText.value.replace(/ufat/g,"u")
                                       .replace(/ober/g,"o")
                                       .replace(/imes/g,"i")
                                       .replace(/enter/g,"e")
                                       .replace(/ai/g, "a")

        hereEncrypted.innerText = "Aqui está o texto descriptografado:"
        txtEncrypted.innerText = `${userText.value}`
    }

    // Função para copiar o texto cripto/descriptografado
    function copy() {
        navigator.clipboard.writeText(txtWillBeCopied.value);
    }
    
    copyButton.addEventListener("click", function() {
        copy();
        hideCopyButton();
    })

    // Função para os botões
    function buttons(operation) {
        if (isEmpty()) {
            return;
        }
        if (isSpecialCharactersOrNumbers()) {
            return;
        }
        toLowerCase();
        removeAccents();
        if(operation === "encrypt") {
            encrypt();
        } else if (operation === "decrypt") {
            decrypt();
        }
        clearTextArea();
        showCopyButton();
    }

    // Adicionar eventos aos botões de criptografar e descriptografar
    const encryptButton = document.getElementById("encrypt");
    const decryptButton = document.getElementById("decrypt");

    encryptButton.addEventListener("click", function() {
        buttons("encrypt");
    });

    decryptButton.addEventListener("click", function() {
        buttons("decrypt");
    });
});
