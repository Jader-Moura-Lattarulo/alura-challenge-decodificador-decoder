document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copy");
    const robotImage = document.getElementById("robot");
    const foundCopied = document.getElementById("no_found_msg_copied");
    const useAsYouWant = document.getElementById("enter_txt");
    const userText = document.getElementById("get_txt_to_encrypt");

    copyButton.style.display = "none"; // Garantir que o botão esteja invisível ao carregar a página

    // Função para mostrar o botão "Copiar"
    function showCopyButton() {
        copyButton.style.display = "block";
        robotImage.style.display = "none";
        foundCopied.style.display = "none";
        useAsYouWant.style.display = "none";
    }

    // Função para esconder o botão "Copiar"
    function hideCopyButton() {
        copyButton.style.display = "none";
        robotImage.style.display = "block";
        foundCopied.style.display = "block";
        useAsYouWant.style.display = "block";
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

    // Adicionar evento ao botão "Copiar"
    copyButton.addEventListener("click", function() {
        hideCopyButton();
    });

    // Adicionar eventos aos botões de criptografar e descriptografar
    const encryptButton = document.querySelector(".body-content__boxes__buttons__encrypt-decrypt:nth-child(1)");
    const decryptButton = document.querySelector(".body-content__boxes__buttons__encrypt-decrypt:nth-child(2)");

    encryptButton.addEventListener("click", function() {
        // Sua lógica de criptografia
        toLowerCase();
        removeAccents();
        showCopyButton();
    });

    decryptButton.addEventListener("click", function() {
        // Sua lógica de descriptografia
        toLowerCase();
        removeAccents();
        showCopyButton();
    });
});
