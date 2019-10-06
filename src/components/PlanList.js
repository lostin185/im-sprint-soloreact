import React from 'react';
import PlanListEntry from './PlanListEntry'

const PlanList = (props) => {
  return (
    <div className="frame">
      <div>
        create new plan:<input />
      </div>
      {props.data.schedule.map((item) => 
        <PlanListEntry 
          plans={item}
          key={item.scheduleKey}
        />
      )}
    </div>
  )
}

export default PlanList;