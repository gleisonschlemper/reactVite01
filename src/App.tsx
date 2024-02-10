import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

function App() {
  const [heightField,setHeightField] = useState<number>(0);
  const [widthField,setWidthField] = useState<number>(0);
  const hendleCalculaButton = () => {
    if(heightField && heightField){
      alert("deu certo");
    }else{
      alert("Digite todos os campos")
    }

  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage} alt="logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a siga para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input 
            type="number" 
            placeholder='Digite a sua altura Ex: 1.79 (em metros)'
            value={heightField > 0 ? heightField : "."}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            />
            <input 
            type="number" 
            placeholder='Digite a seu peso Ex: 74.3 (em kg)'
            value={widthField > 0 ? widthField : "."}
            onChange={e => setWidthField(parseFloat(e.target.value))}
            />
            <button onClick={hendleCalculaButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  )
}

export default App
