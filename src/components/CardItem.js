import React, { useEffect, useRef, useState } from 'react';
import '../App.css'
import { useDispatchCart, useCart } from './ContextReducer';

export default function CardItem(props) {
    const dispatch = useDispatchCart();
    const priceRef = useRef();
    const data = useCart();

    const [qnt, setQnt] = useState(1);
    const [size, setSize] = useState("");

    useEffect(() => {
        if (priceRef.current) {
            setSize(priceRef.current.value);
        }
       
    }, []);
     
    const price = qnt * parseInt(size);
    const handleCart = async () => {

        const existingItem = data.find(item => item.id === props.item._id && item.size === size);
        
   
        const totalPrice = qnt * parseInt(size);
    
        if (existingItem) {
         
            await dispatch({ type: "UPDATE", id: props.item._id, price: totalPrice, qnt: qnt });
        } else {
         
            await dispatch({ type: "ADD", id: props.item._id, name: props.item.name, qnt: qnt, size: size, price: totalPrice });
        }
    }
    
    useEffect(()=>{
        console.log(data)
    },[data])
    return (
        <div className="card mx-1 my-1" style={{ width: "18rem" }}>
            <img src={props.item.img} className="card-img-top" alt="not showing" style={{ width: "18rem", height: "10rem", objectFit: "contain" }} />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">{props.item.description}</p>
                <div>
                    <select className="custom-select custom-select-sm" value={qnt} onChange={(e) => setQnt(e.target.value)}>
                        {[1, 2, 3, 4, 5, 6].map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                    <select className="custom-select custom-select-sm mx-2" ref={priceRef} value={size} onChange={(e) => setSize(e.target.value)}>
                        {props.item.options.map((option, optionIndex) => (
                            <React.Fragment key={optionIndex}>
                                <option value={option.half}>Half{option.half}</option>
                                <option value={option.full}>Full{option.full}</option>
                            </React.Fragment>
                        ))}
                    </select>
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                        ${price}/-
                    </div>
                </div>
            </div>
            <hr />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button type="button" className="btn btn-primary" onClick={handleCart} style={{ marginBottom: "11px" }}>Add to Cart</button>
            </div>
        </div>
    );
}
