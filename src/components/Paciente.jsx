const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar este paciente?');
    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{paciente.petName}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{paciente.petOwner}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
            <span className="font-normal normal-case">{paciente.date}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal normal-case">{paciente.symptoms}</span>
          </p>

          <div className="flex gap-5 mt-3">
            <button 
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md shadow-md transition-all"
              onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button
              className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-md shadow-md transition-all"
              onClick={handleEliminar}
            >Eliminar</button>
          </div>
        </div>
  )
}

export default Paciente