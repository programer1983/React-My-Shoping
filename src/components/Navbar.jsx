import "./../Styles/Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="nav__box">
            <span className="my__shop">My Shoping</span>
            <div className="cart">
                <span>
                   <i class="fas fa-cart-plus"></i>
                </span>
                <span>0</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar