
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
//     const data = useLoaderData()
//     // const [data, setData] = useState([])
//     // useEffect(() => {
//     //  fetch('https://api.github.com/users/hiteshchoudhary')
//     //  .then(response => response.json())
//     //  .then(data => {
//     //     console.log(data);
//     //     setData(data)
//     //  })
//     // }, [])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">GitHub Profile</h1>
      <img
        src={data.avatar_url}
        alt={`${data.login}'s avatar`}
        className="w-48 h-48 rounded-full shadow-lg mb-4 border-4 border-orange-500"
      />
      <p className="text-2xl font-semibold mb-2">
        Followers: <span className="text-orange-400">{data.followers}</span>
      </p>
      <p className="text-xl italic text-gray-300">
        {data.bio ? `“${data.bio}”` : 'No bio available.'}
      </p>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/42aditya31')
  return response.json()
}
