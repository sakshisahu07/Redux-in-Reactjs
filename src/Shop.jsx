import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <div className="text-lg font-semibold flex justify-center items-center">Shop</div>
            <h2 className="text-xl font-bold my-2 flex justify-center items-center">Buy this</h2>
            <div className="flex justify-center items-center space-x-4">
                <button onClick={() => withdrawMoney(100)} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">-</button>
                <span className="text-lg font-semibold">Add to cart</span>
                <button onClick={() => depositMoney(100)} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">+</button>
            </div>
        </>
    );
};

export default Shop;
