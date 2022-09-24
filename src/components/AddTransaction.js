import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit =(e)=>{
        e.preventDefault();

        if(!text || !amount) return

        const newTransaction ={
            id: Math.floor(Math.random() * 10000000),
            text:text,
            amount: +amount
        }

        addTransaction(newTransaction);

        setAmount(0)
        setText('')

    }

  return (
    <div className='add-transaction'>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input
                 type='text' 
                 placeholder='Enter Text...'
                 value={text}
                 onChange={(e)=>setText(e.target.value)} />

            </div>
            <div className='form-control'>
                <label htmlFor='amount'>
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input 
                type='number'
                placeholder='Enter Amount ...'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)} />

            </div>
            <button className='btn'> Add Transaction</button>

        </form>
      
    </div>
  )
}

export default AddTransaction
