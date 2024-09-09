function exibirMenu() {
  console.log("Menu de Opções:");
  console.log("1. Opção 1");
  console.log("2. Opção 2");
  console.log("3. Opção 3");
  console.log("4. Opção 4");
  console.log("5. Encerrar");
}

function processarEscolha(opcao) {
  switch (opcao) {
      case 1:
          console.log("Você escolheu a Opção 1.");
          break;
      case 2:
          console.log("Você escolheu a Opção 2.");
          break;
      case 3:
          console.log("Você escolheu a Opção 3.");
          break;
      case 4:
          console.log("Você escolheu a Opção 4.");
          break;
      case 5:
          console.log("Encerrando o sistema. Até logo!");
          process.exit(); 
          break;
      default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}

function main() {
  exibirMenu();

  const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  rl.question("Digite o número da opção desejada: ", (opcao) => {
      processarEscolha(parseInt(opcao));
      rl.close();
  });
}

main();
