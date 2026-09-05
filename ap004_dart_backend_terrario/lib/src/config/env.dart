import 'package:dotenv/dotenv.dart';

class Env {
  // private Env(){}
  Env._(); //_ é o private e . é construtor do dart

  // require('dotenv').config
  static final DotEnv _env = DotEnv(
    includePlatformEnvironment: true,
  )..load(); // load é equivalente ao config. o .. devolve objeto sobre qual eu apliquei o load. DotEnv inclua também as variáveis de ambiente do sistema (do Platform.environment), não só as que estão no arquivo .env.
  static String obrigatoria(String chave) {
    final valor = _env[chave];
    if (valor == null || valor.trim().isEmpty) {
      throw StateError('Variável de ambiente obrigatória ausente: $chave');
    }
    return valor.trim();
  }

  static String opcional(String chave, String padrao) {
    final valor = _env[chave];
    return (valor == null || valor.trim().isEmpty) ? padrao : valor.trim();
  }

  static int inteiro(String chave, int padrao) {
    final bruto = _env[chave];
    if (bruto == null || bruto.trim().isEmpty) return padrao;
    final valor = int.tryParse(bruto.trim());
    if (valor == null) {
      throw StateError("A variável $chave devve ser um número inteiro: $bruto");
    }
    return valor;
  }
}
