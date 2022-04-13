import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, price, description, id } = service;
    const navigate = useNavigate();
    const handleNavigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="service">
            <img className="w-100" src={img} alt="" />
            <h2>{name}</h2>
            <p>price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigateToServiceDetail(id)} className="btn btn-primary">Book {name}</button>
        </div >
    );
};

export default Service;