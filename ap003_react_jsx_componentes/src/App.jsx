import "./styles.css"

const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderStyle: 'hiden', color: 'white', width: '100%', borderRadius: 8}

const textoDoRotulo = 'Nome:'

const aoClicar = () => alert("Clicou")

const obterTextoDoBotao = () => "Enviar" 

const App = () => {
  return <div style={{margin: 'auto', width: 576, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
  
  <label className="rotulo" htmlFor="campoNome" style={{display: 'block', marginBottom: 8}}>
    {textoDoRotulo}
  </label>

  <input type="text" id="campoNome" style= {{paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outline: 'none', borderRadius: 8 }} />

  <button onClick={aoClicar} style={estilosBotao}>
    {obterTextoDoBotao()}
  </button>
  </div>
}

export default App;