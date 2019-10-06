import React from 'react';
import PlanListEntry from './PlanListEntry'

const PlanList = ({schedule}) => {

  return (
    <div className="frame">
      <div>
        This is plan list.
      </div>
      <div>
        'create new plan:'<input />
      </div>
        {schedule.map((schedule) =>
          <PlanListEntry
            schedule={schedule}
          />
        )}

        {/* <PlanListEntry />
        <PlanListEntry />
        <PlanListEntry />
        <PlanListEntry /> */}
    </div>
  )
}

export default PlanList;