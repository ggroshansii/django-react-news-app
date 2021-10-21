
import React from 'react'
import "./Aside.css"
import AsideItem from "./AsideItem/AsideItem"

export default function Aside(props) {
    return (
        <div>
            <div className="aside-container">
                <h2 className="aside-heading"></h2>
                {props.currentBlogs.map(blog => {
                    return <AsideItem {...blog}/> 
                })}
            </div>
        </div>
    )
}
