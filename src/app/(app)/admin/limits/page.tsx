import React from 'react'
import {Tabs, TabsProps} from 'antd';


const TabPanes: TabsProps['items'] = [
    {
        label: "Limit League",
        key: '1',
        children: `Content of Limit League`,
    },
    {
        label: "Limit Event",
        key: '2',
        children: `Content of Limit Event`,
    },
    {
        label: "Limit Lines",
        key: '3',
        children: `Content of Limit Lines`,
    },
    {
        label: "Show Limited Leagues",
        key: '4',
        children: `Content of Show Limited Leagues`,
    },
    {
        label: "Show Limited Events",
        key: '5',
        children: `Content of Show Limited Events`,
    },
    {
        label: "Show Limited Lines",
        key: '6',
        children: `Content of Show Limited Lines`,
    },
]

function Limits() {
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

export default Limits;
