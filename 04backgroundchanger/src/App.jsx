import React, { useState } from 'react'

function App() {

  const [color, setColor]= useState("black")

  return (
   <>
   <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    

    <div className="fixed bottom-12 left-0 w-full flex justify-center gap-4 z-50">
  <button className="bg-red-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-red-600 transition" onClick={()=>setColor("red")}>Red</button>
  <button className="bg-green-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-green-600 transition" onClick={()=>setColor("green")}>Green</button>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-600 transition" onClick={()=>setColor("blue")}>Blue</button>
  <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl shadow-md hover:bg-yellow-600 transition" onClick={()=>setColor("yellow")}>Yellow</button>
  <button className="bg-purple-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-purple-600 transition" onClick={()=>setColor("purple")}>Purple</button>
  <button className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-pink-600 transition" onClick={()=>setColor("pink")}>Pink</button>
</div>

   </div>


   </>  )
}

export default App
