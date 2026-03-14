import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

export default () => {
  const textoOK = "Já recebi"
  const textoNOK = "Não recebi"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Que pena")
  const componenteFeedback = (
  <Feedback
    funcaoOk={funcaoOK}
    funcaoNOK={funcaoNOK}
    textoOk={textoOK}
    textoNOK={textoNOK}
    />
  )

  return (
    <div className="container border">
      <div className="row">

        <div className="col-12">
          {/* i.fa-solid.fa-hippo */}
          <i className="fa-solid fa-hippo fa-3x"></i>
        </div>
      </div>
      <div className="row">
        {/* pode ficar na mesma linha, mas não necessariamente */}
        <div className="col-sm-12 col-md-6 col-xl-3">
          {/* .card>(.card-header+.caard-body) */}
          <Cartao
            cabecalho="22/02/2026" >
          <Pedido 
            data="22/02/2026" 
            icone="camera"
            titulo="Câmera"
            descricao="Uma linda câmera"/>
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho="23/02/2026" >
              <Pedido 
                icone="bicycle"
                titulo="bicicleta"
                descricao="Uma linda bicileta"/>
                {componenteFeedback}
          </Cartao>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3">
              <Cartao
                cabecalho="24/02/2026" >
                <Pedido  
                  icone="hippo"
                  titulo="Popo"
                  descricao="Um pequeno hipopotamo"/>
                  {componenteFeedback}
              </Cartao>
            </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Cartao
            cabecalho="25/02/2026" >
            <Pedido
              data="25/02/2026" 
              icone="book"
              titulo="Livro"
              descricao="Um livro" />
              {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}