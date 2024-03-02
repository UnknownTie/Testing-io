
import React, { useState, useEffect } from 'react';
import { fetchBitcoinPrice } from '../services/BlockchainService';

const PriceInfo = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const price = await fetchBitcoinPrice();
      setPrice(price);
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // 매 1분마다 가격 정보 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Bitcoin Price: USD {price}</h2>
    </div>
  );
};

export default PriceInfo;
