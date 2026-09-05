import 'dart:io';

import 'package:ap003_dart_colecoes/ap003_dart_colecoes.dart'
    as ap003_dart_colecoes;

void main(List<String> arguments) {
  // var letras = ['A', 'B'];
  // print(letras[0]);
  // print(arguments);

  // final letras = ['A', 'B'];
  // letras[0] = 'C'; // ok
  // letras.add('J'); // ok
  // // letras = ['X']; // nok
  // print(letras);

  // const letras = ['A', 'B'];
  // letras[0] = 'C'; // nok
  // letras.add('J'); // nok
  // // letras = ['X'];
  // print(letras);

  //sound null safety
  // var l1 = [];
  // var l2 =['A']; // tipo String
  // String? a = null;
  // l2.add(a); // nok

  // List<String?>? l2 = ['A'];
  // l2.add(null);
  // l2 = null;

  // // type annotation
  // var l3 = <int> [];

  // var l4 = [null];

  // diagrama de classes (hierarquia)
  //          object
  //   num       String   bool
  // int double

  // ele pega a classe comum para todas
  // var l5 = [1, 1.1, true, 'A', null];
  // var l6 = [];
  // Object a = 1; // estático
  // // a.falar(); // não permite
  // dynamic b = 1; // dinâmico
  // b.falar(); // compila e dá tempo em erro de exec

  // tuplas: lista imutáveis
  // var tupla = ('Ana', 18, true);
  // print(tupla.$1); // começa do 1
  // print(tupla.runtimeType);

  // sets: conjuntos, sem elementos duplicados e sem ordem
  // {}: set e map
  // var a = {}; // inicialmente ele define como mapa
  // var nomes = {'Ana', 'João'};
  // var paises = {'Brasil', 'Brasil'};
  // var a = <String> {}; // type annotation é um set
  // var b = <String?, int> {} // virou mapa

  // final numeros = {1, 2};
  // for(final numero in numeros){ // numero morre no } e nasce de novo
  //   print(numero);
  // }

  // teoria dos conjuntos
  // var A = {1, 2, 3, 4, 5};
  // var B = {1, 3, 7};
  // print(A.union(B));
  // print(B.union(A));
  // print(A.intersection(B));
  // print(B.intersection(A));
  // print(A.difference(B));
  // print(B.difference(A));

  // mapas
  // var pessoa = {
  //   'nome': 'Ana',
  //   'idade': 18,
  //   'altura': 1.8
  // };
  // print(pessoa['nome']);
  // var a = {
  //   1: true,
  //   1: false, // chave repetida n pode
  // };

  // var pessoa = <String, dynamic>{'nome': 'Ana'};

  // var nome = pessoa['nome'] as String;
  // print(nome.toUpperCase());

  // // keys, values, entries
  // for (String key in pessoa.keys) {
  //   print(key);
  //   print(pessoa[key]);
  // }

  // for (String value in pessoa.values) {
  //   print(value);
  // }

  // for (final entry in pessoa.entries) {
  //   print(entry);
  //   print(pessoa[entry.value]); // vai dar null
  // }

  var contatos = <String, int>{'Ana': 123123};
  var opcaoUsuario;
  do {
    opcaoUsuario = menu();
    switch (opcaoUsuario) {
      case 1:
        inserir(contatos);
        break;

      case 2:
        mostrar(contatos);
        break;

      case 3:
        alterar(contatos);
        break;

      case 4:
        deletar(contatos);
        break;

      case 5:
        print(" \n saindo..");
        break;
    }
  } while (opcaoUsuario != 5);
}

int menu() {
  final opcao = {1, 2, 3, 4, 5};
  while (true) {
    print(''' --- menu ---
    1 - inserir novo contato
    2 - visualizar contatos
    3 - alterar contato
    4 - deletar contatos
    5 - sair''');

    print("opcao: ");
    var opcaoUsuario = int.tryParse(stdin.readLineSync()!);
    if (opcaoUsuario != null && opcao.contains(opcaoUsuario)) {
      return opcaoUsuario;
    }
    print('\n opção inválida..');
  }
}

void inserir(Map contatos) {
  print("\n nome: ");
  var nome = stdin.readLineSync()!;
  print("\n numero: ");
  var num = int.tryParse(stdin.readLineSync()!)!;

  var aux = {nome: num};
  contatos.addEntries(aux.entries);
  print("\n adicionado!\n");
}

void deletar(Map contatos) {
  print("\n nome: ");
  var nome = stdin.readLineSync()!;
  contatos.remove(nome);
  print("\n removido!\n");
}

void alterar(Map contatos) {
  print("\n nome: ");
  var nome = stdin.readLineSync()!;
  print("\n novo numero: ");
  var num = int.tryParse(stdin.readLineSync()!)!;
  contatos.update(nome, (value) => num);
  print("\n alterado!\n");
}

void mostrar(Map contatos) {
  print("\nlista de contatos!");
  for (var nome in contatos.keys) {
    print('$nome : ${contatos[nome]}');
  }
  print("");
}
