import React from 'react'
import Calculator from './CalculatorDiv/Calculator'
import { ToastContainer, toast } from "react-toastify";

function Home() {
  return (
    <div className='home' >

    <Calculator/>
    <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
           
          />

    </div>
  )
}

export default Home