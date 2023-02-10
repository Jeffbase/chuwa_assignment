import "./App.css";
import { AuthProvider } from "react-auth-kit";

import Header from "./Commons/Header/Header";
import { useState, useEffect } from "react";

import ProductPage from "./Components/Main/ProdunctPage";
import CreateProduct from "./Components/Main/EditProduct/CreateProduct";

import Cookies from "js-cookie";

function App() {
  const [isSignin, setIsSignin] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  useEffect(() => {
    if (Cookies.get("_auth")) {
      setIsSignin(true);
    } else {
      setIsSignin(false);
    }
  });

  const product = {
    productName: "",
    productDescription: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
    productImage:
      "https://i5.walmartimages.com/asr/52a8a553-1dc9-4263-af1f-c8750bbf7605.b950d0f9a7eb260800e691affbc1e553.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
  };
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Header isSignin={isSignin} setIsSignin={setIsSignin} />
      {addProduct ? (
        <CreateProduct handleAdd={() => setAddProduct(false)} />
      ) : (
        <ProductPage setAddProduct={() => setAddProduct(true)} />
      )}
    </AuthProvider>
  );
}

export default App;
