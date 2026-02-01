import React from 'react';
import './OrderRow.css';

const OrderRow = ({ order }) => {
    return (
        <tr className="order-row">
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.customer}</td>
            <td>${order.total}</td>
            <td>{order.status}</td>
        </tr>
    );
};

export default OrderRow;