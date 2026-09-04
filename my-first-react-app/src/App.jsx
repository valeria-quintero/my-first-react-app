const Card = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title='Star Wars' rating={5} isCool={true} actors={[{name: 'Actors'}]} />
      <Card title='Avatar' />
      <Card title='the lion king' />
    </div>
  )
}
 
export default App
