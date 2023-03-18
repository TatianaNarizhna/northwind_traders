import axios from 'axios';

const BASE_URL = 'https://northwind-mykyta-tetyana.onrender.com';

export const getSuppliersFirstRender = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/suppliers/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSuppliers = async pageNumber => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/suppliers/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSupplierInfo = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item/supplier/${id}`);
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

// const { data } = await axios.get(
//   'https://northwind-mykyta-tetyana.onrender.com/pages/suppliers/1',
// );

// console.log(data);
