import {
  CARTINCREASE,
  ISLOGIN,
  ADDTOCART,
  DELETEFROMCART,
  ISLOGINASSELLER,
  ISLOGINASBIDDER,
  ISLOGINASADMIN,
  UPDATE_USER_NAME,
} from "../Constants/constants";
const init = {
  count: 0,
  islogined: false,
  products: [],
  role:null,
  uname:null,
  pwd:null,
  name:null
};
export const reducer = (state = init, action) => {
  switch (action.type) {
    case CARTINCREASE:
      return {
        ...state,
        count: state.count + 1,
      };

    case ISLOGIN:
      return {
        ...state,
        // islogined: !state.islogined,
        islogined: localStorage.getItem("isloggedin") === "true",
        role: null,
      };

    case ISLOGINASSELLER:
      return {
        ...state,
        // islogined: !state.islogined,
        islogined: localStorage.getItem("isloggedin") === "true",
        role: action.payload[0],
        // role:localStorage.getItem("role"),
        uname: action.payload[1],
        pwd:action.payload[2]
      };

    case ISLOGINASBIDDER:
      return {
        ...state,
        // islogined: !state.islogined,
        islogined: localStorage.getItem("isloggedin") === "true",
        role: action.payload[0],
        // role: localStorage.getItem("role"),
        uname: action.payload[1],
        pwd:action.payload[2]
      };

    case ISLOGINASADMIN:
      return {
        ...state,
        // islogined: !state.islogined,
        islogined: localStorage.getItem("isloggedin") === "true",
        role: action.payload[0],
        // role: localStorage.getItem("role"),
        uname: action.payload[1],
        pwd: action.payload[2],
      };



    case UPDATE_USER_NAME:
      return {
        ...state,
        name: action.payload
      }  

      
    case ADDTOCART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETEFROMCART:
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: updatedProducts,
        count: state.count - 1,
      };

    default:
      return state;
  }
};
