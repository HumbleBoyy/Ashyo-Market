"use client"
import { useParams } from 'next/navigation'

const Product = () => {
    const {id} = useParams()
  return (
    <div className='containers'>
      Product
    </div>
  )
}

export default Product
