import "../assets/css/home.css"
import Pikachu from '../assets/iconos/pikachu.png'


function Home() {
  return (
    <div className="container-home">
    <h1>Bienvenido Querido Maestro Pokemón</h1>
    <img className="logo" src={Pikachu} alt="pikachu" />
  </div>
  )
}

export default Home
