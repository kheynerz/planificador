import React from 'react'

const PlanCard = ({name, route}) => {
  return (
    <div>
        {name}
        <img src={`/icons${route}.svg`}></img>
    </div>
  )
}

export default PlanCard