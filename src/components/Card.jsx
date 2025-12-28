import React from 'react'

const Card = ({meal}) => {
  return (
 <div className='overflow-hidden bg-white rounded-lg shadow-md'>
        <img src={meal?.strMealThumb} alt="meal img" className='object-cover w-full h-48 transition-all duration-200 cursor-pointer md:h-56 hover:scale-105' />

        <div className='p-4'>
            <h2 className='text-lg font-semibold text-gray-800'>{meal.strMeal}</h2>
            <p className='mt-2 text-sm text-gray-600'>{meal.strInstructions.slice(0, 100)}...</p>

            <a href="https://www.themealdb.com/api/json/v1/1/search.php?s=" className='block mt-4 text-blue-500 hover:underline'>Learn More</a>
        </div>
    </div>
  )
}

export default Card
