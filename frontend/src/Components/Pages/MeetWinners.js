
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import { islogin, isloginasseller } from "../../Services/Actions/actions";

export function MeetWinners() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  dispatch(islogin())
  const islogined = useSelector((state) => state.islogined);
  console.log(islogined +" is logged in");

  return (
    <div>
      <h2 className="text-center m-4">====== Meet Winners ======</h2>
      {islogined ? (
        <div className="container my-2">
          <table className="table shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Image</th>
                <th scope="col">Winner</th>
                <th scope="col">Email</th>
                <th scope="col">Blocking Price</th>
                <th scope="col">Product</th>
                <th scope="col">start</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Action</th>{" "}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="card-img-top"
                  alt="error"
                  style={{ height: "30%", width: "20%" }}
                />
                <td>Rajdeep Basak</td>
                <td>rajdeepbasak2000@gmail.com</td>
                <td>82000</td>
                <td>iPhone</td>
                <td>2 sept 2023</td>
                <td>Done</td>
                <td>
                  <i class="bi bi-info-circle"></i>{" "}
                  <i className="bi bi-trash" style={{ cursor: "pointer" }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Sign in to see your carts</h1>
      )}
    </div>
  );
}































////////////////   Main //////////////////


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "bootstrap-icons/font/bootstrap-icons.css";

// export function MeetWinners() {
//   const data = useSelector((state) => state.products);
//   const islogined = useSelector((state) => state.islogined);
//   //   const dispatch = useDispatch();

//   //   const deleteHandler = (id) => {
//   //     // Dispatch the action to delete the product from the cart
//   //     dispatch(deletefromcart(id));
//   //     console.log(data);
//   //   };

//   return (
//     <div>
//       <h2 className="text-center m-4">====== Meet Winners ======</h2>
//       {islogined ? (
//         <div className="container my-2">
//           {data.length >= 1 ? (
//             <table className="table shadow">
//               <thead>
//                 <tr>
//                   <th scope="col">S.N</th>
//                   <th scope="col">Image</th>
//                   <th scope="col">Winner</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Blocking Price</th>
//                   <th scope="col">Product</th>
//                   <th scope="col">start</th>
//                   <th scope="col">Payment Status</th>
//                   <th scope="col">Action</th>{" "}
//                 </tr>
//               </thead>
//               <tbody>
//                 {data &&
//                   data.map((d, index) => {
//                     const { id, img, name, price, count } = d;
//                     return (
//                       <tr key={id}>
//                         <th scope="row">{index + 1}</th>
//                         <img
//                           src={`/${img}`}
//                           className="card-img-top"
//                           alt="error"
//                           style={{ height: "50%", width: "45%" }}
//                         />
//                         <td>{name}</td>
//                         <td>₹{price}</td>
//                         <td>{count}</td>
//                         <td>
//                           <i class="bi bi-info-circle"></i>

//                           {"    "}

//                           <i
//                             // onClick={() => deleteHandler(id)}
//                             className="bi bi-trash"
//                             style={{ cursor: "pointer" }}
//                           ></i>
//                         </td>
//                       </tr>
//                     );
//                   })}
//               </tbody>
//             </table>
//           ) : (
//             <h1>Nothing to show</h1>
//           )}
//         </div>
//       ) : (
//         <h1>Sign in to see your carts</h1>
//       )}
//     </div>
//   );
// }


