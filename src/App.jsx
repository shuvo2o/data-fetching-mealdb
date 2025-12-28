import React, { useEffect, useState } from 'react'
import Card from './components/Card';

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
    <section className='min-h-screen px-4 bg-gray-100'>
         <div className='py-6 text-center text-white bg-teal-500'>
           <h1 className='text-2xl font-bold'>Data Fetching from the Meal DB API</h1>
         </div>
   
   
         <div className='container py-8 mx-auto'>
           {
             loading && <p className='text-center text-blue-500 '>Loading...</p>
           }
   
           {
             error && <p className='text-center text-red-500'>Something went wrong!</p>
           }
   
           <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
             {
               meals.map((meal, index) => (
                 <Card key={index} meal={meal}/>
               ))
             }
           </div>
         </div>
   
   
       </section>
  )
}

export default App
