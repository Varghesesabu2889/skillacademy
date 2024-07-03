import React from 'react'
import './paymentsuccess.css'
import { Link, useParams } from 'react-router-dom'

const Paymentsuccess = ({user}) => {
    const params = useParams()
  return (
   <div className="payment-success-page">
    {user && <div className="success message">
        <h1>Payment Successful</h1>
        <p>Thank you for your purchase</p>
        <p>Reference No:{params.id}</p>
      <h5>Go to Dashboard</h5>
      <h6>Account >>> Dashboard</h6>
    </div>
    
    }
   </div>
)
}

export default Paymentsuccess