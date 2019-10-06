import React from 'react';
import PlanListEntry from './PlanListEntry'

const PlanList = (props) => {
  return (
    <div className="frame">
      <div>
        This is plan list.
      </div>
      <div>
        create new plan:<input />
      </div>
      {props.data.schedule.map((item) => 
        <PlanListEntry 
          plans={item}
          key={item.scheduleKey}
          interaction={props.interaction}
        />
      )}
    </div>
  )
}

export default PlanList;