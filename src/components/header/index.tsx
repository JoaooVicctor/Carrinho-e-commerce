import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { useContext } from "react"

import { CartContext } from "../../contexts/CartContext"

export function Header() {
  const { cartAmount } = useContext(CartContext)

  return(
    <header className="w-full px-1 bg-slate-200">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link className="font-bold text-2x1" to="/">
          Dev Shop
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} color="#121212"/>
          {cartAmount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-600 text-white text-xs font-bold rounded-full">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}