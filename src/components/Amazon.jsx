import {useState} from "react"
import list from "./../data"
import Card from "./../components/Card"
import "./../Styles/Amazon.css"

const Amazon = ({handleClick}) => {
  
  return (
    <section>
        {list.map((item) => (
            <Card key={item.id} item={item} handleClick={handleClick} />
        ))}
    </section>
  )
}

export default Amazon