import React from 'react'
import { useCart, useDispatchCart } from './ContextReducer'
export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  if (data.length == 0) {
    return (
      <div>
        <h1 className='text-white'>This Cart is empty</h1>
      </div>
    )
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("email");
    const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/orderData`, {
      method: 'POST',
      headers: { // Corrected from 'header' to 'headers'
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("orderDetail:", response)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }
  return (
    <div>
      <div className='container'>
        <table className='table text-white'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Qun</th>
              <th scope="col">Size</th>
              <th scope="col">Amount</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {data.map((food, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qnt}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td><button type="button" className="btn btn-primary" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Remove</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='container'>
          <h1 className='text-white'>Total Price - {totalPrice}</h1>
        </div>
        <div>
          <button type="button" class="btn btn-success" onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  )
}
