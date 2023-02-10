const BASE_URL = "/api";

const getCustomerApi = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const loginApi = async (accountInfo) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountInfo),
  });

  return response;
};

const logoutApi = async (accountInfo) => {
  return "logout";
};

const signupApi = async (accountInfo) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountInfo),
  });
  return response;
};

const addProductApi = async (product) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: product }),
  });

  return response;
};

const getProductsApi = async () => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const EditProductApi = async (product) => {
  const response = await fetch(`${BASE_URL}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: product }),
  });

  return response;
};

export default {
  getCustomerApi,
  getProductsApi,
  loginApi,
  logoutApi,
  signupApi,
  addProductApi,
  EditProductApi,
};
