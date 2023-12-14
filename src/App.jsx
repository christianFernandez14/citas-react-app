import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"


const App = () => {

  return (
    <div className="container mx-auto mt-20">

      <Header />
      
      <div className="md:flex mt-12">
        <Formulario />
        <ListadoPaciente />
      </div>

    </div>
  )
}

export default App
