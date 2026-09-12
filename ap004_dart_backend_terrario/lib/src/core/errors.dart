sealed class ErrorApp implements Exception {
  // todas subclasses que herdam dela vivem aqui
  final String mensagem;
  const ErrorApp(this.mensagem);

  @override
  // $runtimeType: cada subclasse mostra o próprio nome sem você reescrever nada, então ErroDeRede imprime ErroDeRede: ...
  String toString() => '$runtimeType: $mensagem';
}

class NaoEncontrado extends ErrorApp {
  const NaoEncontrado(super.mensagem);
}

// 422
class ErroValidacao extends ErrorApp {
  const ErroValidacao(super.mensagem, [this.campos = const {}]);
  final Map<String, String> campos;
}

// 409
class Conflito extends ErrorApp {
  const Conflito(super.mensagem);
}

// 400
class RequisicaoInvalida extends ErrorApp {
  const RequisicaoInvalida(super.mensagem);
}
