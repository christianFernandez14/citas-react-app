import { useState, useEffect } from "react";
import { generarId } from '../helpers'

import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente }) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintoma, setSintoma] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintoma(paciente.sintoma)
    }

  }, [paciente])

  const handleSubmit = e => {
    e.preventDefault();

    if ([nombre.propietario, email, fecha, sintoma].includes('')) {
      setError(true)

      return;
    }

    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma,
      id: generarId()
    }

    setPacientes([...pacientes, objetoPaciente])

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintoma('')

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-11">
        Añade Pacientes {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

        {error && <Error><p>Todo los campos son obligatorios</p></Error>}

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
            value={nombre}
            onChange={e => setNombre(e.target.value)}
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
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={fecha}
            onChange={e => setFecha(e.target.value)}
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
            value={sintoma}
            onChange={e => setSintoma(e.target.value)}

          />

        </div>

        <input
          type="submit"
          value={paciente.id ? 'editar paciente' : 'agregar paciente'}
          className="bg-indigo-600 w-full p-3 uppercase text-white font-bold rounded-md hover:bg-indigo-800 transition-colors cursor-pointer"
        />
      </form>

    </div>
  )
}

export default Formulario