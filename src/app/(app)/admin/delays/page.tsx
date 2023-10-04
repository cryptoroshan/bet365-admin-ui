import React from 'react'
import {Tabs, TabsProps} from 'antd';

const TabPanes: TabsProps['items'] = [
    {
        label: "General Delay",
        key: '1',
        children: `Content of General Delay`,
    },
]

function Delays() {
  return (
    <div>
      <Tabs
            className='text-[#ddd]'
            defaultActiveKey="1"
            centered
            items={TabPanes}
      />  
    </div>
  )
}

export default Delays;
