import React, {useState} from 'react'

const App = () => {
  const [nome, setNome] = useState()
  const [classe, setClasse] = useState()
  const [nivel, setNivel] =useState()

  const atualizaNome = (nome) => {
    setNome(nome)
  }

  const atualizaClasse = (classe) => {
    setClasse(classe)
  }

  const atualizaNivel = (nivel) => {
    if (nivel > 0 || nivel <= 20){
      setNivel(nivel)
    }
    else{
      // mensagem de erro
      
    }
      
  }

  return (
    <div className="row justify-content-center">
      <p 
      style={{ fontSize: '2rem', fontWeight: 'bold', color: 'navy'}}
      className="text-center mt-2 ">
      Criador de Personagem de RPG
      </p>
    </div>
  )
}

export default App