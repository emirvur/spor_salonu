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
          <Link className="link" to="/detail">
              Spor Salonları
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/post">
              Blog
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/">
              Haberler
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="topRight">
      <button className="button button3">Giriş Yap/Üye Ol</button>
    
      </div>
    </div>
  );
}