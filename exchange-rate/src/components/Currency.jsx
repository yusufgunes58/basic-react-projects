import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRight } from "react-icons/fa";
import { getExchangeRate } from '../service/serviceCurrency';


function Currency() {

    const [amount, setAmount] = useState('')
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState('')


    const exchange = async () => {

        const rates = await getExchangeRate(fromCurrency);

        if (!rates) return;

        const rate = rates[toCurrency];
        const converted = rate * amount;
        setResult(converted.toFixed(2));


    }


    // function exchange() {
    //     console.log(amount, fromCurrency, toCurrency);
    // }

    return (
        <div className='currency-div'>
            <div>
                <h3 style={{ marginTop: '-50px', fontFamily: 'arial', backgroundColor: 'beige', color: 'black', width: '100%', textAlign: 'center' }}>
                    currency exchange
                </h3>
            </div>

            <div>
                <input type='number' className='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}

                />
                <select className='currency-select' value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='TRY'>TL</option>
                </select>

                <FaArrowRight style={{ fontSize: '25px', color: '#fff', marginRight: '10px' }} />

                <select className='currency-select'
                    onChange={(e) => setToCurrency(e.target.value)}>
                    <option value='TRY'>TL</option>
                    <option value='EUR'>EUR</option>
                    <option value='USD'> USD</option>
                </select>

                <input type='number' className='result'
                    value={result} readOnly
                />



            </div >
            <button className='exchange-btn'
                onClick={exchange}
            >
                exchange
            </button>
        </div>
    )
}

export default Currency