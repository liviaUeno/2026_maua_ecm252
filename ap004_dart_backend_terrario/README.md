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
