import React, { Component } from 'react'
import '../../styles/Detail.scss'

export default function SmallCard({arr}){

    return (
        <>
            <div className="small-card-information">
                <p>{arr.name}</p>
            </div>
        </>
    )
}