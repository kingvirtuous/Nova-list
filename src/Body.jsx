import React from 'react'

const Body = () => {
  return (
    <div>
      <div className="p-3 items-center m-3 flex justify-center">
        <input placeholder="What need to be done?" className="p-2 w-[500px] h-[50px]" />
        <button className="bg-blue-500 p-4 rounded-lg ml-3.5">
          <i className="fa-solid fa-plus text-3xl text-white"></i>
        </button>
      </div>
      
      
    </div>
  )
}

export default Body