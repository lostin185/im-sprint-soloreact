import React from 'react';
import DataListEntry from './DataListEntry'

const DataList = () => {
  return (
    <div className="frame">
      <div>
        this is DataList.
      </div>
      <div>
        create new data:<input />
      </div>
      <DataListEntry />
    </div>
  )
}

export default DataList;