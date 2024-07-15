document.addEventListener("DOMContentLoaded", function() {
    let userText = document.getElementById("get_txt_to_encrypt");
    let enterText = document.getElementById("type-here");
    let foundCopied = document.getElementById("no_found_msg_copied");
    let robotImage = document.getElementById("robot");
    let useAsYouWant = document.getElementById("enter_txt");
    let hereEncryptedDecrypted = document.getElementById("outputTitle");
    let txtEncryptedDecrypted = document.getElementById("txtEncryptedDecrypted");
    let copyButton = document.getElementById("copy");
    let changeFont = document.querySelector(".app-container__output__interactive__answer");

    copyButton.style.display = "none"; // Garante que o botão esteja invisível ao carregar a página
    txtEncryptedDecrypted.style.display = "none";
    hereEncryptedDecrypted.style.display = "none";

    // Função para mostrar o botão "Copiar", habilitar a área do texto encriptado para copia, o robo sumir e aparecer textos
    function showCopyButton() {
        copyButton.style.display = "flex"; 
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
            let moreThan = "caracteres especiais";
            enterText.value = isNeeded(moreThan);
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        } else if (onlyNumbers.test(text)) {
            let moreThan = "números";
            enterText.value = isNeeded(moreThan);
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        } else if (isSpecialCharAndNumbers.test(text)) {
            enterText.style.marginBottom = "60%";
            let moreThan = "números e caracteres especiais";
            enterText.value = isNeeded(moreThan);
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        } else {
            return false;
        }
    }

    // Função para simular digitação no output e faz a troca de fontes para simular uma variação
    function simulateTyping() {
        changeFont.style.setProperty("font-family", "var(--font-typing)");
        let textToType = userText.value;
        let index = 0;
        let interval = setInterval(function() {
            txtEncryptedDecrypted.innerText += textToType.substr(0, index + 1);
            index++;
            if (index >= textToType.length) {
                clearInterval(interval);
                userText.style.animation = "none";
                changeFont.style.setProperty("font-family", "var(--main-font)")
            }
        } , 100);
    }
    
    //Função para criptografar textos
    function encrypt() {
        userText.value = userText.value.replace(/e/g,"enter")
                                       .replace(/i/g,"imes")
                                       .replace(/a/g,"ai")
                                       .replace(/o/g,"ober")
                                       .replace(/u/g,"ufat")
                                       

        hereEncryptedDecrypted.innerText = "Aqui está o texto criptografado:";
        simulateTyping();
        txtEncryptedDecrypted.innerText = `${userText.value}`
    }

    //Função para criptografar textos
    function decrypt() {
        userText.value = userText.value.replace(/enter/g,"e")
                                       .replace(/imes/g,"i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g,"o")
                                       .replace(/ufat/g,"u")

        hereEncryptedDecrypted.innerText = "Aqui está o texto descriptografado:";
        simulateTyping();
        txtEncryptedDecrypted.innerText = `${userText.value}`
    }

    // Função para copiar o texto cripto/descriptografado
    function copy() {
        navigator.clipboard.writeText(txtEncryptedDecrypted.value);
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
