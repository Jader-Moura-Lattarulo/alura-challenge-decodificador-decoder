document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy');
    copyButton.style.display = 'none'; // Garantir que o botão esteja invisível ao carregar a página

    // Função para mostrar o botão "Copiar"
    function showCopyButton() {
        copyButton.style.display = 'block';
    }

    // Função para esconder o botão "Copiar"
    function hideCopyButton() {
        copyButton.style.display = 'none';
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
