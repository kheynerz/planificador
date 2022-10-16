import NavBar from "../NavBar"
import PlanCard from "./PlanCard"

const Planificator = () => {
  

  const applications = [
    {name : 'Visualizar', route : '/plan/visualize'},
    {name : 'Horarios'  , route :'/plan/schedule'},
    {name : 'Actividades', route :'/plan/activities'},
    {name : 'Reportes', route :'/plan/reports'}
  ]
  
  const rightnavs = [
    {name : 'Volver', route : '/main'},
  ]

  const navstyles = {backgroundColor: 'rgb(153,217,234)'}
    
  return (
    <>
      <NavBar
        navstyles={navstyles}
        leftnavs={applications}
        rightnavs={rightnavs}
      />

      <div className="container" style={{ display: "flex" }}>
        {applications.map(({ name, route }, index) => (
          <PlanCard key={index} name={name} route={route} />
        ))}
      </div>
    </>
  );
}

export default Planificator