import React from 'react';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const cart = useSelector(state => state);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr />
      </tbody>
    </table>
  );
};

export default Cart;
