import React from 'react'

import { Tabs, TabsProps } from 'antd';

const TabPanes: TabsProps['items'] = [
    {
        label: "Search User",
        key: '1',
        children: `Content of Tab Search Users`,
    },
    {
        label: "Coupons",
        key: '2',
        children: `Content of Tab Coupons`,
    },
    {
        label: "Search Coupon",
        key: '3',
        children: `Content of Tab  Search Coupon`,
    }
]

function Tools() {
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

export default Tools; 
