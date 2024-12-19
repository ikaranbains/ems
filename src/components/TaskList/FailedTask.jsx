import React from 'react'

const FailedTask = ({data}) => {
  console.log(data)
  return (
    <div className="h-full w-[350px] bg-red-600 rounded-xl p-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h2 className="text-xs px-2 py-1 bg-red-800 rounded-md">
            Category: {data.category}
          </h2>
          <h3 className="text-sm font-semibold">{data.date}</h3>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">
         {data.description}
        </p>
        <div className='mt-5'>
            <button className='w-full bg-red-800 hover:bg-red-900 cursor-not-allowed rounded-md py-[4px]'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
