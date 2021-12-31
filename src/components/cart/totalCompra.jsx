
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Example } from './modal'
import './cart.scss'

export const TotalCom=()=>{
const {cart,PriceTot }= useContext(CartContext)
let priceTot= PriceTot()
    return(
        <>
        {cart.length !==0 && (
            <div className="contentTotal">
            <div className="contentSub">
            <h3 className="sub">Sub total</h3>
                <div className="contSub">
                    <span>....</span>
                    <h3 className="precioSub">$USD{priceTot}.00</h3>
                </div>
            </div>
            <div className="contentSumTot">
            <h3 className="tot">Total</h3>
                <div className="contTot">
                    <span>....</span>
                    <h3 className="precioTot">$USD{priceTot}.00</h3>
                </div>
            </div>
          
          <Example/>
          </div>
        )}
          
        </>
    )
}