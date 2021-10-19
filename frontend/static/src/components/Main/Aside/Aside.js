
import React from 'react'
import "./Aside.css"
import AsideItem from "./AsideItem/AsideItem"

export default function Aside() {
    return (
        <div>
            <div className="aside-container">
                <h2 className="aside-heading">Popular Posts</h2>
                <AsideItem />
            </div>
        </div>
    )
}
