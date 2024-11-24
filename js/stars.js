document.addEventListener("DOMContentLoaded", () => {
    // Define o número de estrelas com base no tamanho da tela
    const numStars = window.innerWidth <= 768 ? 250 : 1000; // Menos estrelas em dispositivos móveis

    const body = document.body;

    const generateStars = () => {
        // Calcula a altura total do documento, incluindo a área rolável
        const pageHeight = Math.max(document.body.scrollHeight, window.innerHeight);

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement("div");
            star.className = "star";

            // Define tamanho aleatório para as estrelas
            const size = Math.random() * 3; // Tamanho entre 0 e 3px
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Define posição aleatória para cada estrela
            star.style.top = `${Math.random() * pageHeight}px`; // Posição vertical (em pixels)
            star.style.left = `${Math.random() * 100}vw`; // Posição horizontal (em porcentagem)

            body.appendChild(star); // Adiciona a estrela ao corpo da página
        }
    };

    generateStars();

    // Gera estrelas adicionais ao redimensionar a janela
    window.addEventListener("resize", () => {
        document.querySelectorAll(".star").forEach((star) => star.remove()); // Remove estrelas antigas
        generateStars(); // Gera novas estrelas
    });
});
