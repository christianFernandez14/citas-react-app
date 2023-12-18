import { useState, useEffect } from "react";

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"


const App = () => {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS()
  }, [])


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  const elminandoPaciente = id => {
    // console.log('Elinando paciente', id)
    const pacienteActulizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacienteActulizados)
  }

  return (
    <div className="container mx-auto mt-20">

      <Header />

      <div className="md:flex mt-12">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          elminandoPaciente={elminandoPaciente}
        />
      </div>

    </div>
  )
}

export default App
