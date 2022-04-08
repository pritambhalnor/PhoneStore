import React, { useContext } from 'react'
import styled from 'styled-components'
import { PayPalButton } from "react-paypal-button-v2";
import { AppContext } from '../AppContext'
import { Link } from 'react-router-dom'

export const Carttotal = () => {
    const { subtotal, tax, Total } = useContext(AppContext);
    const contextData = useContext(AppContext);
    function clearcart() {
        contextData.clearcart();
    }
    // console.log(subtotal);
    return (
        <Wrapper>
            <div>
                <Link to='/'>
                    <button className='btn btn-danger text-capitalize my-3' onClick={() => { clearcart() }} >clear cart</button>
                </Link></div>

            <div className='text-capitalize'>
                <h5 >
                    <span>sub total:</span>
                    <strong>₹{subtotal} </strong>
                </h5>
                <h5>
                    <span>tax :</span>
                    <strong>₹{tax} </strong>
                </h5>
                <h5>
                    <span>total :</span>
                    <strong>₹{Total} </strong>
                </h5>
            </div>
            <div className='my-4'>
                <PayPalButton
                    amount="0.01"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        });
                    }}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
// display:flex;
// flex-direction:column;
// justify-content:end;
padding:2vh;
position:absolute;
right:10vh;
`