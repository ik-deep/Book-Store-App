import React from 'react'
import "../components/HeroCards.css"

const HeroCards = ({data}) => {
  return (
    <>
    <div className='card'>
      {data&&data.length>=10&&data!==null?
       <>
        <div className='card-details'>
          <img src={data[7].volumeInfo&&data[7].volumeInfo.imageLinks&&data[7].volumeInfo.imageLinks.thumbnail?data[7].volumeInfo.imageLinks.thumbnail:''}></img>
          <div className='card-detail'>
          <h2><b>{data[7].volumeInfo.title}</b></h2>
        <p>Description- {data[7].volumeInfo.description}
        </p>
        <button className='read-btn' type='button'>Now read</button>
          </div>
       
       </div>
       <div className='card-details'>
       <img src={data[8].volumeInfo&&data[8].volumeInfo.imageLinks&&data[8].volumeInfo.imageLinks.thumbnail?data[8].volumeInfo.imageLinks.thumbnail:''}></img>
       <div className='card-detail'>
        <h2><b>{data[8].volumeInfo.title}</b></h2>
        <p>Description- {data[8].volumeInfo.description}
        </p>
        <button className='read-btn' type='button'>Now read</button>
        </div>
       </div>
       <div className='card-details'>
       <img src={data[9].volumeInfo&&data[9].volumeInfo.imageLinks&&data[9].volumeInfo.imageLinks.thumbnail?data[9].volumeInfo.imageLinks.thumbnail:''}></img>
       <div className='card-detail'>
        <h2><b>{data[9].volumeInfo.title}</b></h2>
        <p>Description- {data[9].volumeInfo.description}
        </p>
        <button className='read-btn' type='button'>Now read</button>
        </div>
       </div>
      
       </>
      :''}
   
   
   </div>
   <h2 className='heading'><b>More Books</b></h2>
   <div className='more-books'>
    {data&&data!==null?data.map(d=><> <img src={d.volumeInfo&&d.volumeInfo.imageLinks&&d.volumeInfo.imageLinks.thumbnail&&d.volumeInfo.imageLinks.thumbnail?d.volumeInfo.imageLinks.thumbnail:''} alt={d.id}/></>
   )
    :''}
   </div>
    </>
  )
}

export default HeroCards