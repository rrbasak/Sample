import { CARTINCREASE } from "../Constants/constants";
import { ISLOGIN } from "../Constants/constants";
import { ADDTOCART } from "../Constants/constants";
import { DELETEFROMCART } from "../Constants/constants";
import { ISLOGINASSELLER } from "../Constants/constants";
import { ISLOGINASBIDDER } from "../Constants/constants";
import { ISLOGINASADMIN } from "../Constants/constants";
import { UPDATE_USER_NAME } from "../Constants/constants";

export const cartincrase = () => {
  return {
    type: CARTINCREASE,
  };
};

export const islogin = () => {
  return {
    type: ISLOGIN,
  };
};

export const isloginasseller = (data) => {
  return {
    type: ISLOGINASSELLER,
    payload:data
  };
};
export const isloginasbidder = (data) => {
  return {
    type: ISLOGINASBIDDER,
    payload: data,
  };
};
export const isloginasadmin = (data) => {
  return {
    type: ISLOGINASADMIN,
    payload: data,
  };
};



export const updateUserName = (name) => ({
  type: UPDATE_USER_NAME,
  payload: name,
});

export const addtocart = (data) => {
  return {
    type: ADDTOCART,
    payload: {
      id: data.id,
      img: data.imgg,
      name: data.name,
      price: data.price,
      count: data.counted,
    },
  };
};




export const deletefromcart = (id) => {
  return {
    type: DELETEFROMCART,
    payload: id,
  };
};
