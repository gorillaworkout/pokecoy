import React from 'react'


export default function TypeCard({arr}){

    return (
        <div className="type-pokemon-card">
            <p>{arr.name}</p>
        </div>
    )
}