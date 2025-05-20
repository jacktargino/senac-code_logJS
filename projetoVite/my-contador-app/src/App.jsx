import { useState } from "react";
import './app.css'

const capacidadeMaxima = 10;

function App() {

  const [pessoas, setPessoas] = useState(0);

  const entrou = () => {

    if(pessoas < capacidadeMaxima) {
      setPessoas(pessoas + 1)

    }

  }


  const saiu = () => {

    if(pessoas > 0) {
      setPessoas(pessoas - 1)

    }

  }


  const status = () => {

    if(pessoas === 0) return "Nenhuma pessoa no local.";
    if(pessoas === capacidadeMaxima) return "Local lotado!";
    return "Entrada permitida";

  }

  return (

    <div className="container">
      <h1>Contador de Pessoas</h1>
      <div className="contador">{pessoas}</div>
      <div className="botoes">
        <button onClick={entrou}>Entrou</button>
        <button onClick={saiu}>Saiu</button>
      </div>

      <p>{status()}</p>

    </div>

  );


}

export default App;