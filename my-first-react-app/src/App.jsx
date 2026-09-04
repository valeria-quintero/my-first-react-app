import { useState } from "react"

const Card = ({title}) => {
  const [hasLicked, setHasLicked] = useState(false);

  return (
    <div className="card" >
      <h2>{title}</h2>

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
