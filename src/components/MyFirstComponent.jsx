export const MyFirstComponent = () => {
  
  const name = 'David Romero';
  const github_profile = "https://github.com/DRomeroLucas";
  const student = {
    first_name : 'Carlos',
    last_name : 'Alvarado',
    mobile : '30028438219',
    linkedid_profile : 'https://www.linkedin.com/in/carlos-alvarado-859b90213/'
  }

  return (
    <>
        <div>MyFirstComponent</div>
        <div className="container bg-info">
          <h1>Temas de React</h1>
          <ul>
              <li>Componentes</li>
              <li>Eventos</li>
              <li>Eventos Hooks</li>
              <li>Props</li>
          </ul>
        </div>
        <div className="container bg-success py-2 px-4">
          <h1>Datos del Docente</h1>
          <p>Nombre: <strong> { name } </strong></p>
          <p>GitHub: { github_profile } </p>
        </div>
        <div className="container bg-success py-2 px-4">
          <h1>Datos del Estudiante</h1>
          <p>Nombre: { student.first_name } </p>
          <p>Apellido: { student.last_name } </p>
          <p>Celular: {student.mobile} </p>
          <p>LinkedIn: <a href={student.linkedid_profile} target="_blank">{student.linkedid_profile}</a> </p>
        </div>
        <div className="container bg-danger mt-2 pt-2">
          <h1>Objeto completo</h1>
          <pre>{JSON.stringify(student)}</pre>
        </div>
    </>
  )
}
