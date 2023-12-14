
import Paciente from "./Paciente"

const ListadoPaciente = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      <h2 className="font-black text-3xl text-center capitalize">listado pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 capitalize">
        administra <span className="lowercase">tus</span> {''}
        <span className="text-indigo-600 font-bold ">pacientes / citas</span>
      </p>

      <div className="md:h-screen overflow-auto">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    
    </div>
  )
}

export default ListadoPaciente