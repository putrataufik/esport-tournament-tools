import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
  const { name } = useParams()

  return (
    <div>Dynamic {name ? name : ''}</div>
  )
}

export default Dynamic