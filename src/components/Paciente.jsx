

const Paciente = () => {
  return (

    <div
      className="m-3 bg-white shadow-md px-5 py-10 rounded-lg ">
      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        nombre: {''}
        <span
          className="font-normal capitalize">
          hook
        </span>
      </p>

      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        propietario: {''}
        <span
          className="font-normal capitalize">
          christian fernandez
        </span>
      </p>
      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        email: {''}
        <span
          className="font-normal normal-case">
          christian@correo.com
        </span>
      </p>
      <p
        className="font-bold mb-3 text-gray-700 uppercase">
        fecha alta: {''}
        <span
          className="font-normal capitalize">
          14 de diciembre del 2023
        </span>
      </p>
      <p
        className="font-bold mb-3 text-gray-700 uppercase text-justify">
        sintomas: {''}
        <span
          className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellendus maxime recusandae voluptate officiis dicta eligendi! Id dolor delectus quos aperiam magnam ipsa nesciunt inventore obcaecati, saepe odio eaque iusto!
        </span>
      </p>
    </div>

  )
}

export default Paciente