import React from 'react'

const PlanListEntry = (props) => {
  return (
    <div className="frame">
      {props.plans.scheduleName}
    </div>
  )
}

export default PlanListEntry;