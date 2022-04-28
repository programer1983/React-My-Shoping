import "./../Styles/Navbar.css"

const Navbar = ({setShow, size}) => {
  return (
    <nav>
        <div className="nav__box">
            <span className="my__shop" onClick={() => setShow(true)}>My Shoping</span>
            <div className="cart" onClick={() => setShow(false)}>
                <span>
                   <i class="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar