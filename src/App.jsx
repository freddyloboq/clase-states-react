import { useState } from 'react'
import './App.css'
import { Card } from './components/card.jsx'

function App() {
  // let numero = 0
  // const setNumero = (numeroRecibiro) => {
  //   return numero += numeroRecibiro
  // }
  const [numero, setNumero] = useState(10)
  const [estoy, setEstoy] = useState(true)
  const [show, setShow] = useState(true)
  // let show = true;

  const cantidadDeCard = [
    { id: 1, title: 'Card 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
    { id: 2, title: 'Card 2', description: 'Lorem, ipsum dolor.'},
    { id: 3, title: 'Card 3', description: 'Lorem ipsum dolor sit.'},
    { id: 4, title: 'Card 4', description: 'Lorem ipsum dolor sit amet consectetur.'},
    { id: 5, title: 'Card 5', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
  ]


  return (
    <>
      <div className="container">
        <h1>Sumando</h1>
        {/* <button onClick={()=> {numero = numero+1; console.log(numero)}}>Resultado {numero}</button> */}
        <button onClick={() => setNumero(numero + 1)}>
          Resultado {numero}
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => setEstoy(!estoy)}
        >
          Esta?
        </button>
        <p className={estoy ? "text-success" : "text-danger"}>
          Si es verde si estoy, si es rojo no
        </p>
        <h2>Comenzando</h2>
        <div className="row">
          {cantidadDeCard.map((item, position) => {
            return <Card key={item.id} item={item} position={position} />;
          })}
        </div>

        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            // show = !show
            setShow(!show);
            console.log("show :>> ", show);
          }}
        >
          Info
        </button>

        {show && (
          <Card
            item={{
              title: "Este es el titulo",
              description: "esta es la descripcion",
              id: 99,
            }}
          />
        )}
      </div>
    </>
  );
}

export default App
