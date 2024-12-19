import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,changeUser}) => {
  return (
    <div className='bg-[#1C1C1C] h-screen p-12'>
      <Header  data={data} changeUser={changeUser}/>
      <TaskNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
