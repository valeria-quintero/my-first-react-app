import { useEffect, useState } from "react"

const Card = ({title}) => {
  const [count, setCount] = useState(0);
  const [hasLicked, setHasLicked] = useState(false);

  useEffect( () => {
    console.log(`${title} has been licked: ${hasLicked}`)
  }, [hasLicked] ); //deps - revisa si la variable ha cambiado, y solo si cambia el efecto será llamado

  //Caso mas comun de uso
  // useEffect(() => {
  //   console.log('Card Rendered')
  // }, [])



  return (
    <div className="card" onClick={ () => setCount(count + 1) }>
      <h2>{title} <br /> {count || null} </h2>

      <button onClick={() => setHasLicked(!hasLicked)}>
        {hasLicked ? '💓' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {

  return (
    <div className="card-container">
      <Card title='Star Wars' rating={5} isCool={true} />
      <Card title='Avatar' />
      <Card title='the Lion King' />
    </div>
  )
}
 
export default App
