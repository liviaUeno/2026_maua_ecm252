import 'dart:ffi';

import '../models/terrario.dart';

class FiltroTerrario {
  const FiltroTerrario({
    //construtor com parâmetros nomeados (usa {})
    this.bioma,
    this.umidadeMinima,
    this.pagina = 1,
    this.tamanhoPagina = 20,
  });

  final Bioma? bioma;
  final int? umidadeMinima;
  final int pagina;
  final int tamanhoPagina;

  int get deslocamento => (pagina - 1) * tamanhoPagina;
}

class Pagina<T> {
  const Pagina({
    required this.itens,
    required this.total,
    required this.pagina,
    required this.tamanhoPagina,
  });

  final List<T> itens;
  final int total;
  final int pagina;
  final int tamanhoPagina;

  int get totalPaginas => total == 0 ? 1 : (total / tamanhoPagina).ceil();
  bool get temProxima => pagina < totalPaginas;
  bool get temAnterior => pagina > 1;
}

abstract interface class TerrarioRepository {
  Future<Pagina<Terrario>> listar(FiltroTerrario filtro);
  Future<Terrario?> buscarPorId(int id);
  Future<Terrario?> buscarPorApelido(String apelido);
  Future<Terrario> inserir(Terrario terrario);
  Future<Terrario?> atualizar(int id, Terrario terrario);
  Future<bool> remover(int id);
}
