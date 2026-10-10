import 'package:mysql_dart/mysql_client.dart';
import 'app_config.dart';

// O pool é criado uma única vez, no boot, e compartilhado por todas as
/// requisições. Ele não abre conexões imediatamente: cada conexão nasce
/// na primeira vez que é necessária e depois é reaproveitada.
MySQLConnectionPool criarPool(AppConfig config) {
  return MySQLConnectionPool(
    host: config.dbHost,
    port: config.dbPort,
    userName: config.dbUser,
    password: config.dbPassword,
    databaseName: config.dbName,
    maxConnections: config.dbPoolSize, // numero de conexões dentro da pool
    secure: false,
    allowPublicKeyRetrieval: true,
  );
}

Future<void> aguardarBanco(
  MySQLConnectionPool pool, {
  int tentativas = 30,
  Duration intervalo = const Duration(seconds: 2),
}) async {
  // SELECT 1
  for (var tentativa = 1; tentativa <= tentativas; tentativa++) {
    try {
      await pool.execute('SELECT 1');
      return;
    } catch (_) {
      if (tentativa == tentativas) rethrow; // função termina igual return
      await Future<void>.delayed(intervalo);
    }
  }
}
