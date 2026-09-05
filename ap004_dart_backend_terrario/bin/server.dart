import 'package:ap004_dart_backend_terrario/src/config/app_config.dart';
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'dart:io';

Future<void> main(List<String> arguments) async {
  final config = AppConfig.fromEnv();
  Response handler(Request request) {
    // handler: função q recebe uma req e retorna uma res
    return Response.ok('API de Terrarios funcionando...');
  }

  final servidor = await shelf_io.serve(
    handler,
    InternetAddress.anyIPv4,
    config.serverPort,
  );

  stdout.writeln('Servidor ouvindo em http://localhost:${servidor.port}');
  stdout.writeln(config);
}
