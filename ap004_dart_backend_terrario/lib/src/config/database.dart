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
