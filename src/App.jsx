import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"


const App = () => {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPaciente />
    </div>
  )
}

export default App
