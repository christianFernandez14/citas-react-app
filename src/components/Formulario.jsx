

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-12">
        Añade Pacientes {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-600 font-bold uppercase"
          >
            nombre de la mascota
          </label>

          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />

        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-600 font-bold uppercase"
          >
            nombre del propietario
          </label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />

        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-600 font-bold uppercase"
          >
            email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />

        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-600 font-bold uppercase"
          >
            alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />

        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-600 font-bold uppercase"
          >
            sintomas
          </label>

          <textarea
            id="sintomas"
            placeholder="Describe el síntoma de tu mascota..."
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

          />

        </div>

        <input
          type="submit"
          value="agregar paciente"
          className="bg-indigo-600 w-full p-3 uppercase text-white font-bold rounded-md hover:bg-indigo-800 transition-colors cursor-pointer"
        />
      </form>

    </div>
  )
}

export default Formulario