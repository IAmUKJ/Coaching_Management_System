import axios from "axios";

export const createOrder = async (amount) => {
  return await axios.post("https://coaching-management-system-9w2s.onrender.com/api/payment/create-order", { amount });
};
