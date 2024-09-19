let menu = prompt(`Escolha a forma de pagamento: 
1 - Cartão de crédito 
2 - Cartão de débito 
3 - Pix 
4 - Boleto 
5 - Encerrar`)

do{
  switch(menu) {
    case 1:
      alert('Voce escolhe opção 1')
      break
    case 2:
      alert('Você opção 2')
      break
    case 3:
      alert('Você escolheu opção 3')
      break
    case 4:
      alert('Você escolheu opção 4')
      break
  }
} while (menu != 5)
          console.log("Encerrando o sistema. Até logo!");
          process.exit(); 
          break;
      default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}
