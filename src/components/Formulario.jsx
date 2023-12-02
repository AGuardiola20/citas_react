import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, paciente, setPacientes, setPaciente}) => {
  const [petName, setPetName] = useState("");
  const [petOwner, setPetOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setPetName(paciente.petName)
      setPetOwner(paciente.petOwner)
      setEmail(paciente.email)
      setDate(paciente.date)
      setSymptoms(paciente.symptoms)
    }
  },[paciente])


  const newId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if([petName, petOwner, email, date, symptoms].includes('')){
      //Error
      setError(true);
      return;
    }
    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      petName, 
      petOwner, 
      email, 
      date, 
      symptoms,
    }

    if(paciente.id){
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({})

    }else{
      // Nuevo registro
      objetoPaciente.id = newId();
      setPacientes([...pacientes, objetoPaciente]);

    }

    // Vaciar el form
    setPetName('');
    setPetOwner('');
    setEmail('');
    setDate('');
    setSymptoms('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        onSubmit={handleSubmit}  
      >
        {error && 
          <Error 
            errorMsg = 'Todos los campos son obligatorios'
          />
        }
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petName"
          >
            Nombre Mascota
          </label>
          <input
            id="petName"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petOwner"
          >
            Nombre del Propietario
          </label>
          <input
            id="petOwner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={petOwner}
            onChange={(e) => setPetOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Correo Electronico
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="usuario@usuario.com"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            Alta
          </label>
          <input
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={date}
            onChange={ (e) => setDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="symptoms"
          >
            Sintomas
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-all shadow-md rounded-md"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
