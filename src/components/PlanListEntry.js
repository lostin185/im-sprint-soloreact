import React from 'react'

const PlanListEntry = ({schedule}) => {
  return (
    <div className="frame">
      <div>
        scheduleName: {schedule.scheduleName}<br/>
        Date: {schedule.scheduledDate}<br/>
        Time: {schedule.scheduledTime}<br/>
        Created: {schedule.createdDate}
      </div>
    </div>
  )
}

export default PlanListEntry;