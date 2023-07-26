import { useNavigate } from "react-router";
import {
  levis,
  zara,
  roadster,
} from "../../assets";
import { useFilters } from "../../context/filterContext";
import "./brand.css";

export const Brand = () => {
  const { filterDispatch } = useFilters();
  const navigate = useNavigate();
  return (
    <>
      <h2>Featured Brands </h2>
      <div className="brand">
       
        
        <img
          src={levis}
          alt="levis"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Levis" });
            navigate("/products");
          }}
        />
       
        <img
          src={zara}
          alt="zara"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Zara" });
            navigate("/products");
          }}
        />
        
        <img
          src={roadster}
          alt="roadster"
          onClick={() => {
            filterDispatch({ type: "clear_filters" });
            filterDispatch({ type: "filter_by_brands", payload: "Roadster" });
            navigate("/products");
          }}
        />
        
      </div>
    </>
  );
};
