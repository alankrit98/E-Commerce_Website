import React, { useContext } from 'react'
import Title from '../components/Title'

const Cart = () => {

  const { products, currency, cartItems } = useContext(ShopContext)

  return (
    <div className=''>
      <Title text1={'CART'} text2={'PRODUCTS'}/>
    </div>
  )
}

export default Cart