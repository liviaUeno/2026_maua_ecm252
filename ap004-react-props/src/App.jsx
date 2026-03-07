import Pedido from "./Pedido"
export default () => {
  return (
    <div className="container border">
      <div className="row">

        <div className="col-12">
          {/* i.fa-solid.fa-hippo */}
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>


      </div>
      <div className="row">
        {/* pode ficar na mesma linha, mas não necessariamente */}
        <div className="col-sm-12 col-md-6 col-xl-3">
          {/* .card>(.card-header+.caard-body) */}
          <Pedido 
            data="22/02/2026" 
            icone="camera"
            titulo="Câmera"
            descricao="Uma linda câmera"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido 
           data="23/02/2026" 
            icone="bicycle"
            titulo="bicicleta"
            descricao="Uma linda bicileta"/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido 
            data="24/02/2026" 
            icone="hippo"
            titulo="Popo"
            descricao="Um pequeno hipopotamo"/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido
            data="25/02/2026" 
            icone="book"
            titulo="Livro"
            descricao="Um livro" />
        </div>
      </div>
    </div>
  )
}