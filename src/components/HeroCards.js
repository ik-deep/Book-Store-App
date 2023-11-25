import React from 'react'
import "../components/HeroCards.css"

const HeroCards = ({data}) => {
  return (
    <>
    <div className='card'>
      {data&&data!==null?data.map(d=>{
        return <div className='card-details'>
        <h2><b>{d.volumeInfo.title}</b></h2>
        <p>Description- {d.volumeInfo.description}
        </p>
       </div>
      }):''}
   
   </div>
   
    </>
  )
}

export default HeroCards