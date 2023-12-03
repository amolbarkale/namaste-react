import { useEffect, useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  
  useEffect(()=>{
    
  },[])

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
      </div>
      <div className="nat-items">
        <ul className="list">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Contact</li>
          <button
            onClick={() => {
              btnName == "Login"? setBtnName("Logout"):
              setBtnName("Login")
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
