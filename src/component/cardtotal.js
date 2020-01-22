import React from 'react';

const CardTotal = (props) => {
    return (
        <div className="card-total-wrap d-flex flex-wrap">
            <div className="ac-row w-100 d-flex justify-content-between pb-3">
                <div>Subtotal</div>
                <div>&#36; 1550 / yr</div>
            </div>
            <div className="ac-row w-100 d-flex justify-content-between pb-3">
                <div>Tax</div>
                <div>&#36; 100 / yr</div>
            </div>
            <div className="border-top pt-1 w-100 mt-2 mb-3"></div>
            <div className="ac-row w-100 d-flex justify-content-between pb-3">
                <div>Total</div>
                <div>&#36; 1550 / yr</div>
            </div>

            <div className="ac-row w-100 pt-5">
                <button type="button" className="btn btn-primary w-100">Start Exploring</button>
            </div>
        </div>
    )
}

export default CardTotal;