import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

  const {transactions} = useContext(GlobalContext);
  console.log(transactions)
  return (
    <div className='transaction-list'>
        <h3>History</h3>
        <ul className='list'>
           {
             transactions.map(transaction=>(
              <Transaction transaction={transaction}   key={transaction.id}/>
             ))
           }
        </ul>
      
    </div>
  )
}

export default TransactionList
