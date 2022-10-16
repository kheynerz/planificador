import NavBar from "../NavBar";
import AppCard from "./AppCard";

const MainView = () => {
  const applications = [
    {name : 'Planificador', route : '/plan'},
    {name : 'Instructores'  , route :'/instruc'},
    {name : 'Oferta Académica', route :'/offer'}
  ]
  
  const rightnavs = [
    {name : 'Cerrar sesión', route : '/login'},
  ]

  return (
    <>
      <NavBar leftnavs={applications} rightnavs={rightnavs} />
      <div className="container mt-5">
        {applications.map((app, index) => (
          <AppCard key={index} name={app.name} route={app.route} />
        ))}
      </div>
    </>
  );
}

export default MainView