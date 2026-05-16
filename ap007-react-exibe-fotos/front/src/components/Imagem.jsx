import React from 'react'

const Imagem = ({imgStyle, src, alt}) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`} >
        <img
        className='border-round'
         src ={src} 
         alt={alt} />
    </div>
  )
}

export default Imagem