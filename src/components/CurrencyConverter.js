// components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const API_KEY = '0ab178bbec544137095274385cd98685'; // Replace with your new API key
  const BASE_URL = 'http://data.fixer.io/api';

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(`${BASE_URL}/latest?access_key=${API_KEY}`);
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [API_KEY]);

  const convertCurrency = () => {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const result = amount * rate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          From Currency:
          <input value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} />
        </label>
        <label>
          To Currency:
          <input value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} />
        </label>
        <button type="button" onClick={convertCurrency}>
          Convert
        </button>
        {convertedAmount && (
          <p>
            {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
          </p>
        )}
      </form>
    </div>
  );
};

export default CurrencyConverter;
