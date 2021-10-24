
import React from 'react'
import "./Aside.css"
import AsideItem from "./AsideItem/AsideItem"

export default function Aside(props) {

    let sortedBlogs = [...props.currentBlogs].sort((a,b) => {
        if ( a.popularity_score > b.popularity_score ){
            return -1;
          }
          if ( a.popularity_score < b.popularity_score){
            return 1;
          }
          return 0;
        }
    )

    return (
        <div>
            <div className="aside-container">
                <h2 className="aside-heading">Popular Posts</h2>
                {sortedBlogs.map(blog => {
                    return <AsideItem {...blog}/> 
                })}
            </div>
        </div>
    )
}
