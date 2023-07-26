/* eslint-disable */

import { NavLink, useNavigate } from "react-router-dom";
import { Brand } from "../../components/brand/brand";
import { Featured } from "../../components/featured/featured";
import { Category } from "../../components/category/category";
import { header } from "../../assets";
import ClipLoader from "react-spinners/ClipLoader";
import "./home.css";
import { useProducts } from "../../context/productContext";

export const Home = () => {
  const navigate = useNavigate();
  const {productState} = useProducts();
  return (
    <>
      <div className="hero">
        <img src={header} alt="" />
        <div className="header">
          <h1>Elevate your fashion game  </h1>
          <p>
            <NavLink to="/products">
               Explore Now <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </p>
        </div>
      </div>

      <div className="content">
        <Brand />

        

        
        {/* {productState.isProductLoading ? <ClipLoader color={`var(--primary-color)`} size={40}/> : <Featured />} */}

        {productState?.isCategoryLoading ? <ClipLoader color={`var(--primary-color)`} size={40}/> : <Category />}
        
      </div>
      <footer>
        <div className="footer-div">
         
          <div className="contacts">
            <div className="companies">
              <h3>COMPANY</h3>
              <p onClick={() => navigate("/")}>About Us</p>
              <p onClick={() => navigate("/")}>Contact Us</p>
              <p onClick={() => navigate("/")}>Career</p>
            </div>

            <div className="socials">
              <h3>CONTACTS: </h3>
              <a href="https://github.com/jdineshkarthic" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github fa-lg"></i> Github
              </a>
              <a href="https://twitter.com/_dinesh_karthic" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-twitter fa-lg"></i> Twitter
              </a>
              <a href="https://www.linkedin.com/in/j-dinesh-karthic-b96659190" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p>
          Copyright <i class="fa-regular fa-copyright"></i>2023 OpenNova. All
          rights reserved.
        </p>
      </footer>
    </>
  );
};
