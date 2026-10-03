```
dart create -t console <nome_da_pasta>
dart pub add shelf shelf_router dotenv mysql_dart shelf_swagger_ui
dart pub add dev:test dev:lints
```

no analysis_option:

```
linter:
  rules:
    - prefer_final_locals
    - avoid_print # em servidor, use log estruturado
    - always_declare_return_types
    - unawaited_futures # futures esquecidos são bugs silenciosos

analyzer:
  language:
    strict-casts: true # proíbe conversões implícitas a partir de dynamic
    strict-raw-types: true # exige parâmetros de tipo explícitos
```

dai pra rodar faz `dart analyze`

sobe o mysql no docker

```
docker run --name ecm252-20262-mysql-terrarios \
-e MYSQL_ROOT_PASSWORD=root-dev-2026 \
-e MYSQL_DATABASE=terrarios \
-e MYSQL_USER=terrario_app \
-e MYSQL_PASSWORD=terrario-dev-2026 \
-v "$(pwd)/docker/mysql/init:/docker-entrypoint-initdb.d:ro" \ -- aponta para o volume
-p 3307:3306 \ -- externa:interna (usa 3307 pq a gnt ja tem mysql no pc rodando na 3306)
-d mysql:8.4
```

dai roda `docker exec -it ecm252-20262-mysql-terrarios mysql -u terrario_app -p terrarios` ve se criou bonitinho a tabela. USE terrarios; SHOW TABLES;
