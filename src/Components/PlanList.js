import React from 'react';
import PlanListEntry from './PlanListEntry'

const PlanList = () => {
  return (
    <div className="frame">
      <div>
        This is plan list.
      </div>
      <div>
        create new plan:<input />
      </div>
      <PlanListEntry />

    </div>
  )
}

export default PlanList;