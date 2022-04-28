

const Card = ({item, handleClick}) => {
 const {id, title, author, price, img} = item

  return (
    <div className="cards">
        <div className="image__box">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
            <button onClick={() => handleClick(item)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card