import { useNavigate } from "react-router";
import { cartEmpty } from "../../assets";
import "./cart.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart-items">
      <img src={cartEmpty} alt="cart" />
      <h3>Ooops! Your cart is empty</h3>
      <p>
      It seems you haven't added any items yet. Feel free to browse our top categories and discover something you love.
      </p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
  );
};

export default EmptyCart;
