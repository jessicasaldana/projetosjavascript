// Abrir/fechar menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Seleciona o botão pelo seu ID
const botao = document.getElementById('botao');

// Adiciona um ouvinte de evento para o evento 'click'
/*botao.addEventListener('click', function() {
 *  // Redireciona para outra página
 *   window.location.href = '#';
 *});
 */