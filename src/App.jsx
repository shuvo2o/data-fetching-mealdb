import React, { useEffect, useState } from 'react'

const App = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json())
    .then((data)=>{
      setMeals(data.meals || []);
      setLoading(false)
    })
    .catch(err =>{
      console.log(err)
      setError(err.message)
      setLoading(false)
    })
  },[])
  return (
    
    <div className='min-h-screen bg-gray-700'>
     <div>
       <h2 className='text-xl text-center text-white'>Data Fetching from MealDB API </h2>
     </div>
    </div>
  )
}

export default App
