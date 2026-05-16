import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({imgStyle, photos}) => {
  return (
    photos.map((photo, key) => (
    <Imagem
        imgStyle={imgStyle}
        src={photo.src.small}
        alt={photo.alt}
        key={key}
     />
    ))
  )
}

export default ListaImagens