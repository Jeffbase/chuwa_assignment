import {
  Layout,
  Menu,
  Typography,
  Space,
  Row,
  Col,
  Select,
  Button,
  Pagination,
} from "antd";
import "./index.css";

import ProductCard from "./ProductCard";

import api from "../../api/api";

import { useEffect, useState } from "react";

import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const ProductPage = ({ setAddProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getProductsApi();
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="background">
      <div className="products-frame">
        <Row justify="space-between">
          <h1>Products</h1>
          <div>
            <Select
              defaultValue="low-high"
              style={{ width: 180, height: 35 }}
              options={[
                { value: "high-low", label: "Price: high to low" },
                { value: "low-high", label: "Price: low to high" },
                { value: "last", label: "Last added" },
              ]}
            />
            <Button type="primary" onClick={setAddProduct}>
              Add Product
            </Button>
          </div>
        </Row>
        <Space className="products-cards" size={[20, 25]} wrap>
          {
            //   new Array().fill(null).map((_, index) => (
            //     // eslint-disable-next-line react/no-array-index-key
            //     <ProductCard key={index}>Button</ProductCard>
            //   ))
            products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })
          }
        </Space>
        <Pagination defaultCurrent={1} total={products.length} pageSize={10} />
      </div>
    </div>
  );
};

export default ProductPage;
