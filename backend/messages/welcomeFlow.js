// messages/welcomeFlow.js

const users = {}; // Guarda estado do usuário temporariamente

export function getMessage(phone, incomingText) {
  // Primeira vez que o usuário envia mensagem
  if (!users[phone]) {
    users[phone] = { step: 1 };
    return "Olá! 👋 Bem-vindo(a) à WandersonWeb. Qual é o seu nome?";
  }

  const user = users[phone];

  switch (user.step) {
    case 1:
      // Usuário respondeu com o nome
      user.name = incomingText.trim();
      user.step = 2;
      return `Ótimo, ${user.name}! Como podemos ajudá-lo hoje?\n` +
             `1️⃣ Falar com atendente\n` +
             `2️⃣ Saber sobre nossos serviços\n` +
             `3️⃣ Comprar produtos`;

    case 2:
      // Usuário escolhe uma opção
      if (incomingText === "1") {
        user.step = 3;
        return `Certo, ${user.name}. Vou te encaminhar para um atendente humano.`;
      } else if (incomingText === "2") {
        user.step = 3;
        return `Perfeito, ${user.name}. Aqui estão nossos serviços: ...`;
      } else if (incomingText === "3") {
        user.step = 3;
        return `Ótimo, ${user.name}. Você pode acessar nosso catálogo de produtos aqui: ...`;
      } else {
        return `Desculpe, ${user.name}, não entendi. Por favor, escolha uma opção:\n` +
               `1️⃣ Falar com atendente\n2️⃣ Saber sobre nossos serviços\n3️⃣ Comprar produtos`;
      }

    case 3:
      return `Se precisar de mais alguma coisa, ${user.name}, é só me chamar! 😃`;

    default:
      return `Olá ${user.name}, bem-vindo de volta!`;
  }
}