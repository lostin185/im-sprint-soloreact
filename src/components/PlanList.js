import React from 'react';
import PlanListEntry from './PlanListEntry'

const PlanList = (props) => {
  return (
    <div className="frame">
      <div>
        This is plan list.
      </div>
      <form onSubmit={props.planSubmit}>
        <label>
          add new plan:
          <input type="text" value={props.planValue} onChange={props.planChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
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