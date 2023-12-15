import Paciente from "./Paciente"

const ListadoPaciente = ({ pacientes, setPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes.length
        ? (
          <>
            <h2 className="font-black text-3xl text-center capitalize">listado pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10 capitalize">
              administra <span className="lowercase">tus</span> {''}
              <span className="text-indigo-600 font-bold ">pacientes / citas</span>
            </p>

            <div className="md:h-screen overflow-auto">

              {pacientes.map(paciente => (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                />
              ))}

            </div>
          </>)
        : (
          <>
            <h2 className="font-black text-3xl text-center capitalize">Sin pancientes</h2>

            <p className="text-lg mt-5 text-center mb-10 capitalize">
              agrega <span className="lowercase">a tus</span> {''}
              <span className="text-indigo-600 font-bold ">pacientes / citas</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPaciente