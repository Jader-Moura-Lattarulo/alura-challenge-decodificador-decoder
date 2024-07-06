document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copy");
    const robotImage = document.getElementById("robot");
    const foundCopied = document.getElementById("no_found_msg_copied");
    const useAsYouWant = document.getElementById("enter_txt");
    const userText = document.getElementById("get_txt_to_encrypt");
    const txtEncrypted = document.getElementById("txtEncrypted");
    const hereEncrypted = document.getElementById("hereIsEncryptedText");
    const txtWillBeCopied = document.getElementById("txtEncrypted");
    const enterText = document.getElementById("type-here");
    const onlySpecialCharactersRegex = /^[^a-zA-Z0-9]+$/;
    const hasNormalCharactersRegex = /[a-zA-Z0-9]/;

    copyButton.style.display = "none"; // Garante que o botão esteja invisível ao carregar a página
    txtEncrypted.style.display = "none";

    // Função para mostrar o botão "Copiar", habilitar a área do texto encriptado para copia, o robo sumir e aparecer textos
    function showCopyButton() {
        copyButton.style.display = "flex"; //Faz o botão aparecer usando o layout flexível
        robotImage.style.display = "none";
        txtEncrypted.style.display = "block";
        foundCopied.style.display = "none";
        useAsYouWant.style.display = "none";
        hereEncrypted.style.display = "block";
    }

    // Função para esconder o botão "Copiar", aparecer o robo e textos
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

    //Função para verificar se a entrada está vazia
    function isEmpty (){
        if (!userText.value || userText.value.trim() === "") {
            enterText.value = "É preciso uma entrada de texto para a máquina funcionar.";
            enterText.innerHTML = enterText.value;
            return true;
        }
        enterText.value = "Digite aqui...";
        enterText.innerHTML = enterText.value;
        return false;
    }

    //Função para verificar se a entrada está só com caracteres especiais
    function isSpecialCharacters() {
        const text = userText.value;
        const pattern = /^[^\w\s]+$/;

        if (pattern.test(text)) {
            enterText.value = "Só tem caracteres.";
            enterText.innerHTML = enterText.value;
            clearTextArea();
            return true;
        }
        return false;
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

    // Adicionar eventos aos botões de criptografar e descriptografar
    const encryptButton = document.getElementById("encrypt");
    const decryptButton = document.getElementById("decrypt");

    encryptButton.addEventListener("click", function() {
        //lógica de criptografia
        if (isEmpty()) {
            return;
        }

        if (isSpecialCharacters()) {
            return;
        }

        toLowerCase();
        removeAccents();
        encrypt();
        clearTextArea();
        showCopyButton();
    });

    decryptButton.addEventListener("click", function() {
        //lógica de descriptografia
        if (isEmpty()) {
            return;
        }
    
        toLowerCase();
        removeAccents();
        decrypt();
        clearTextArea();
        showCopyButton();
    });
});
