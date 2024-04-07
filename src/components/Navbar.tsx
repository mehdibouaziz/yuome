import { useNavigate, useLocation } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaIdBadge } from "react-icons/fa6";


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route: string): boolean => {
        if(route === location.pathname){
            return true;
        } else return false;
    }
    const activeButtonStyle = "text-2xl text-green-600";
    const inactiveButtonStyle = "text-2xl";
    const disabledButtonStyle = "text-2xl text-gray-600";

  return (
    <div className="btm-nav btm-nav-lg bg-base-200">
        <button onClick={() => navigate('/profile')}>
            <FaIdBadge className={pathMatchRoute('/profile') ? activeButtonStyle : inactiveButtonStyle} />
            <span className="text-xs font-normal">Profile</span>
        </button>
        <button>
            <FaPlusSquare className="text-6xl text-green-600" />
            {/* <span className="text-sm">Add</span> */}
        </button>
        <button onClick={() => navigate('/')}>
            <FaHouseChimneyUser className={pathMatchRoute('/') ? activeButtonStyle : inactiveButtonStyle} />
            <span className="text-xs font-normal">Groups</span>
        </button>
    </div>
  )
}

export default Navbar