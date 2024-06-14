import React, { useEffect, useState } from 'react';

export default function MyOrder(props) {
  const [orderData, setOrderData]= useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let userEmail = localStorage.getItem("email");
      let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/myOrderData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail,
        })
      })
      if (result.ok) {
        result = await result.json();
        console.log(result)
        setOrderData(result)
      }
    }
    fetchData();
  }, []);

  console.log(orderData ? orderData : "Order data is null"); 

  return (
    <div>
      {orderData && orderData.orderData && orderData.orderData.order_data.map((array, arrIndex) => {
        return (
          <div key={arrIndex}>
            <div style={{fontWeight:"bold"}}>
              Order Number {arrIndex+1}
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Size</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {array.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.qnt}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
