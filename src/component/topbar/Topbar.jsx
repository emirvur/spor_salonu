import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="star"></i>
        <i className="star"></i>
        <i className="star"></i>
        <i className="star"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Anasayfa
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/list">
              Spor Salonları
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/haberler">
              Haberler
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="topRight">
     
    
      </div>
    </div>
    
  );
}