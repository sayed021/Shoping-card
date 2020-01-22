import React from 'react';
import CardTotal from '../component/cardtotal';
import CheckList from '../component/checklist';

const Checkout = (props) => {
    return (
        <div className="wrap">
            <div className="center box-shadow">
                <div className="page-content checkout-page">
                    <h2 className="page-heading">Simple checkout page</h2>
                    <div className="checklist">
                        <CheckList />
                    </div>
                    <div className="check-summary">
                        <CardTotal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;