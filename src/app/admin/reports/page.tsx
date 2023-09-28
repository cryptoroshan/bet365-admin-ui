import React from 'react'
import {Tabs, TabsProps} from 'antd';

const TabPanes: TabsProps['items'] = [
    {
        label: "Coupons",
        key: '1',
        children: `Content of Coupons`,
    },
    {
        label: "Income - Outcome",
        key: '2',
        children: `Content of Tab Add User`,
    },
    {
        label: "Slots",
        key: '3',
        children: `Content of Slots`,
    },
    {
        label: "Casino",
        key: '4',
        children: `Content of Casino`,
    },
    {
        label: "Transactions",
        key: '5',
        children: `Content of Transactions`,
    }
]

function Reports() {
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

export default Reports; 
