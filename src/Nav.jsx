import React from 'react'

const Nav = () => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-blue-300 justify-between flex px-5 py-10 items-center rounded-b-[40px]">
      <div className="text-white font-extrabold ml-2 text-4xl">Nova-List<i className="fa-solid fa-circle-check text-3xl ml-2.5 text-white"></i></div>
      <div><i className="fa-solid fa-sun text-yellow-500 mr-2 text-3xl"></i></div>
    </div>
  )
}

export default Nav