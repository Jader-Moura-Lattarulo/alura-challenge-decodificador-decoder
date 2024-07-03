document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById("copy");
    const robotImage = document.getElementById("robot");
    const foundCopied = document.getElementById("no_found_msg_copied");
    const txt = document.getElementById("enter_txt");

    copyButton.style.display = 'none'; // Garantir que o botão esteja invisível ao carregar a página

    // Função para mostrar o botão "Copiar"
    function showCopyButton() {
        copyButton.style.display = "block";
        robotImage.style.display = "none";
        foundCopied.style.display = "none";
        txt.style.display = "none";
    }

    // Função para esconder o botão "Copiar"
    function hideCopyButton() {
        copyButton.style.display = "none";
        robotImage.style.display = "block";
        foundCopied.style.display = "block";
        txt.style.display = "block";
        foundCopied.innerText = "Texto copiado com sucesso!";
        txt.innerText = "Utilize seu texto como quiser!";
        txt.style.display = "block";
    }

    function replaceLetters(text) {
        function removeAccents(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        const replacements = {
            "a": "ai",
            "e": "enter",
            "i": "imes",
            "o": "ober",
            "u": "ufat"
        };

        let result = "";
        text = removeAccents(text.toLowerCase());

        for (let char of text) {
            if (char.toLowerCase() in replacements) {
                result += replacements[char.toLowerCase()];
            } else {
                result += char;
            }
        }
        return result;
    }

    function encryptText(text) {
        const shift = 3;
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);
            if (char.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 + shift) % 26) +97);
                }
            }
            result += char;
        }

        return result;
    }    

    // Adicionar evento ao botão "Copiar"
    copyButton.addEventListener('click', function() {
        hideCopyButton();
    });

    // Adicionar eventos aos botões de criptografar e descriptografar
    const encryptButton = document.querySelector('.body-content__boxes__buttons__encrypt-decrypt:nth-child(1)');
    const decryptButton = document.querySelector('.body-content__boxes__buttons__encrypt-decrypt:nth-child(2)');

    encryptButton.addEventListener('click', function() {
        // Sua lógica de criptografia
        showCopyButton();
    });

    decryptButton.addEventListener('click', function() {
        // Sua lógica de descriptografia
        showCopyButton();
    });
});
