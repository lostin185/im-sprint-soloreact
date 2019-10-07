import React from 'react'

const PlanListEntry = (props) => {
  return (
    <div className="eventFrame" onClick={props.interaction}>
      {props.plans.scheduleName}
    </div>
  )
}

export default PlanListEntry;