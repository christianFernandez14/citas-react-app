

const Paciente = ({ paciente }) => {

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

    </div>

  )
}

export default Paciente