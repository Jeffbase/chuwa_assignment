import "./index.css";
import api from "../../../api/api";
import { useState } from "react";

import BrokenImg from "../../../image/Vector.png";

import { Input, Row, Select, Button, Space } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const CreateProduct = ({ product, handleAdd }) => {
  const [productName, setProductName] = useState(product.productName);
  const [productDescription, setProductDescription] = useState(
    product.productDescription
  );
  const [productCategory, setProductCategory] = useState(
    product.productCategory
  );
  const [productPrice, setProductPrice] = useState(product.productPrice);
  const [productQuantity, setProductQuantity] = useState(
    product.productQuantity
  );
  const [productImage, setProductImage] = useState(product.productImage);
  const [preview, setPreview] = useState(false);
  const handleAddProduct = async () => {
    const product = {
      id: Date.now(),
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productQuantity: productQuantity,
      productImage: productImage,
    };
    const response = await api.addProductApi(product);
    const data = await response.json();
    if (response.status !== 200) {
      alert(`Login API response status error: ${data.message}`);
    } else {
      handleAdd();
      console.log(data.message);
    }
  };
  return (
    <div className="background">
      <div className="profile-frame">
        <h1 className="profile-title">Create Product</h1>

        <div className="product-form">
          <div className="product-form-name">
            <p>Product name</p>
            <Input
              className="product-form-name-input"
              size="large"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            ></Input>
          </div>

          <div className="product-form-description">
            <p>Product Description</p>
            <TextArea
              rows={5}
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            ></TextArea>
          </div>
          <Row justify="space-between">
            <div className="product-form-category">
              <p>Category</p>
              <Select
                className="product-form-category-select"
                size="large"
                value={productCategory ? productCategory : "1"}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <Option value="1">Category1</Option>
                <Option value="2">Category2</Option>
              </Select>
            </div>
            <div className="product-form-price">
              <p>Price</p>
              <Input
                size="large"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              ></Input>
            </div>
          </Row>
          <Row justify="space-between">
            <div className="product-form-stock">
              <p>In Stock Quantity</p>
              <Input
                size="large"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              ></Input>
            </div>
            <div className="product-form-img-link">
              <p>Add Image Link</p>
              <Input.Group compact>
                <Input
                  style={{ width: "calc(357px - 30%)" }}
                  size="large"
                  value={productImage ? productImage : "http://"}
                  onChange={(e) => {
                    setProductImage(e.target.value);
                    setPreview(false);
                  }}
                />
                <Button
                  type="primary"
                  size="large"
                  onClick={() => setPreview(true)}
                >
                  Upload
                </Button>
              </Input.Group>
            </div>
          </Row>
          <Row justify={"center"}>
            {preview ? (
              <Space align="center" style={{ height: "198px" }}>
                <img className="link-img" src={productImage} />
              </Space>
            ) : (
              <Space
                direction="vertical"
                align="center"
                className="product-form-img"
              >
                <img src={BrokenImg} />
                <p>image preview!</p>
              </Space>
            )}
          </Row>

          <Button type="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};
CreateProduct.defaultProps = {
  product: {
    productName: "",
    productDescription: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productImage: "",
  },
};
export default CreateProduct;
