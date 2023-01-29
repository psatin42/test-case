import React from 'react'
import './HeaderCard.css'


export default function HeaderCard({title, img}) {
  return (
    <div className='mycard'>
      {title}
      <img src={img} alt='logo' className='header-image'/>
</div>
  )
}
