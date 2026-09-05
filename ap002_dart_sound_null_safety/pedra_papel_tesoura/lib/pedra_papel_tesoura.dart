import 'dart:io';
import 'dart:math';

enum OPCAO { pedra, papel, tesoura, sair }

void jogo() {
  int? opcaoUsuario;
  int opcaoComputador;
  OPCAO opcaoUsuarioEnum;
  OPCAO opcaoComputadorEnum;
  Random random = Random();

  do {
    // exibir menu
    menu();
    // capturar opcaoUsuario, validando
    do {
      print("Digite sua escolha: ");
      opcaoUsuario = int.tryParse(stdin.readLineSync()!);
      if (opcaoUsuario == null || opcaoUsuario < 1 || opcaoUsuario > 4) {
        print("Opção inválida... \n");
      }
    } while (opcaoUsuario == null || opcaoUsuario < 1 || opcaoUsuario > 4);

    if (opcaoUsuario == 4) {
      print("Saindo...");
      break;
    }

    // sorteio da escolha do computador
    opcaoComputador = random.nextInt(3) + 1;
    // mapear opção do usuário de int para enum
    opcaoUsuarioEnum = opcaoEscolhida("Você", opcaoUsuario);
    // mapear opção do computador de int para enum
    opcaoComputadorEnum = opcaoEscolhida("Computador", opcaoComputador);

    // quem venceu ou houve empate?
    // exibir resultado
    quemVenceu(opcaoUsuarioEnum, opcaoComputadorEnum);
  } while (true);
}

void menu() {
  print("\n--- MENU ---");
  print('''PEDRA PAPEL TESOURA: 
1 - PEDRA
2 - PAPEL 
3 - TESOURA
4 - SAIR''');
}

OPCAO opcaoEscolhida(String jogador, int opcao) {
  switch (opcao) {
    case 1:
      print("$jogador escolheu pedra");
      return OPCAO.pedra;
    case 2:
      print("$jogador escolheu papel");
      return OPCAO.papel;
    default:
      print("$jogador escolheu tesoura");
      return OPCAO.tesoura;
  }
}

void quemVenceu(OPCAO jogador, OPCAO computador) {
  if (jogador == computador) {
    print("\nEmpate!");
  } else {
    if ((jogador == OPCAO.pedra && computador == OPCAO.tesoura) ||
        (jogador == OPCAO.papel && computador == OPCAO.pedra) ||
        (jogador == OPCAO.tesoura && computador == OPCAO.papel)) {
      print("\nVocê venceu!");
    } else {
      print("\nComputador venceu!");
    }
  }
}
