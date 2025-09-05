// Captura o formulário e o parágrafo de mensagem
const form = document.getElementById('contato-form');
const mensagem = document.getElementById('mensagem-enviada');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede envio real

  // Captura os valores
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const texto = document.getElementById('mensagem').value;

  // Simula envio de mensagem
  mensagem.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
  mensagem.style.color = 'green';

  // Limpa o formulário
  form.reset();
});
