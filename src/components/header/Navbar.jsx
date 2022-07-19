import { ButtonsNavbar } from "./ButtonsNavbar"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../../public/instagramLogo.svg" width='100px' alt="logo" />
      </div>

      <div className="search">
        <span className="material-symbols-outlined">search</span>
        <input className="search_input" type="text" placeholder="Buscar" />
      </div>
      
      <ButtonsNavbar />
      
    </nav>
  )
}
