import "./index.css";
import { Button, Row } from "antd";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <img className="product-img" src={product.productImage} />
        <p className="product-name">{product.productName}</p>
        <p className="product-price">${product.productPrice}</p>
        <Row justify="space-between">
          <Button>Add</Button>
          <Button>Edit</Button>
        </Row>
      </div>
    </>
  );
};

export default ProductCard;
