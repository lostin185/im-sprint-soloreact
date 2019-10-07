import React from 'react'

const PlanListEntry = (props) => {
  return (
    <div>
      <div className="eventFrame" onClick={props.interaction}>
        {props.plans.scheduleName}
      </div>
    </div>
  )
}

export default PlanListEntry;