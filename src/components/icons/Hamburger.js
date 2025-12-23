import {ReactComponent as HamburgerIcon} from "../../assets/hamburger_menu_.svg"

function Hamburger ({size = 32, color = "495E57", onclick}) {
    return (
        <button 
          onclick={onclick}
          style={{color}}
          className="hamburger-btn"
        >
          <HamburgerIcon 
            width={size}
            height={size}
            className="hamburger-icon" />
        </button>
    )
}

export default Hamburger;