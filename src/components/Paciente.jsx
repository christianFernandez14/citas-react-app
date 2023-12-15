
const Paciente = ({ paciente, setPaciente }) => {

  const { nombre, propietario, email, fecha, sintoma } = paciente

  return (

    <div
      className="m-3 bg-white shadow-md px-5 py-10 rounded-lg ">

      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        nombre: {''}
        <span
          className="font-normal capitalize">
          {nombre}
        </span>
      </p>

      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        propietario: {''}
        <span
          className="font-normal capitalize">
          {propietario}
        </span>
      </p>

      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        email: {''}
        <span
          className="font-normal normal-case">
          {email}
        </span>
      </p>

      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        fecha alta: {''}
        <span
          className="font-normal capitalize">
          {fecha}
        </span>
      </p>

      <p
        className="font-bold mb-3 text-gray-700 uppercase text-justify">
        sintomas: {''}
        <span
          className="font-normal normal-case">
          {sintoma}
        </span>
      </p>

      <div
        className="flex justify-between mt-10">

        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={() =>  setPaciente(paciente)}
        >
          editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
        >
          eliminar
        </button>
      </div>

    </div>

  )
}

export default Paciente