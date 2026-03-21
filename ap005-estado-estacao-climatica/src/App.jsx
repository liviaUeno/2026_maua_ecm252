import React, {useState} from 'react'

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)
  
  const obterEstacao = (dataAtual, latitude) => {
    const d1 = new Date(dataAtual.getFullYear(), 5, 21) // contagem do mes começa do 0 
    const d2 = new Date(dataAtual.getFullYear(), 8, 24)
    const d3 = new Date(dataAtual.getFullYear(), 11, 22)
    const d4 = new Date(dataAtual.getFullYear(), 2, 21)
    
    const estaNoSul = latitude < 0

    if (dataAtual >= d1 && dataAtual < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if (dataAtual >= d3 || dataAtual < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
  

  }

  const icones ={
    'Primavera':'leaf',
    'Verão':'sun',
    'Outono':'leaf',
    'Inverno':'snowflake'
  }

  const obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition( // caixinha de "permite compartilhar loc?" -- assync
    (position) => {
      const dataAtual = new Date()
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      // chamar a obterEstacao 
      const estacao = obterEstacao(dataAtual, latitude)

      // obter o icone apropriado
      const icone = icones[estacao]

      // atualizar o estado
      setLatitude(latitude)
      setLongitude(longitude)
      setEstacao(estacao)
      setData(dataAtual.toLocaleDateString())
      setIcone(icone)

    }, 
    (erro) => {
      setMensagemDeErro("É preciso liberar o acesso à localização para ver a sua estação.")
      console.log(`erro: ${erro.toString()}`)
    }) 
  }

  return (
   <div className="container mt-2">
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div 
            style={{ height: "6rem" }}
            className="d-flex align-items-center border rounded mb-2">
              <i className={`fa-solid fa-${icone} fa-5x`}></i>
                {/* {p.w-75.ms.3.text-center.fs-1} */}
                <p className="w-75 ms 3 text-center fs-1">
                  {estacao}
                </p>
            </div>
              <div>
              <p className="text-center">
                {
                  latitude ?
                    `Coordenadas: ${latitude}, ${longitude}. Data: ${data}`
                  : 
                    mensagemDeErro ?
                      mensagemDeErro
                    :
                      'Clique no botão para obter sua localização'
                }
              </p>
              </div>

            <button
            onClick={obterLocalizacao}
            className='btn btn-outline-primary w-100 mt-2'>
              Qual a minha estação
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App