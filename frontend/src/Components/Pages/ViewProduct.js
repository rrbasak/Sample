import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export function ViewProduct() {
  const navigate = useNavigate();
  const [proData, setProData] = useState();
  const deleteHandler = (id) => {
    console.log(id, "delete");
    axios
      .delete(`http://localhost:8080/auction/delete/${id}`)
      .then((response) => {
        console.log(response);
        setProData((eachResponse) =>
          eachResponse.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const infohandler = (product_id) => {
    navigate(`/productInfo/${product_id}`);
  };
  const updatehandler = (id) => {
    const productToUpdate = proData.find((product) => product.id === id);
    console.log("id" + id);
    navigate(`/updateproduct/${id}`, { state: { productData: productToUpdate } });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/auction/readAll")
      .then((response) => {
        setProData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  console.log(proData);
  return (
    <div>
      <h2 className="text-center m-4">PRODUCTS</h2>
      {proData ? (
        <div className="container my-2">
          <table className="table shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">img</th>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">Bid Price</th>
                <th scope="col">Start</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>{" "}
              </tr>
            </thead>
            <tbody>
              {proData &&
                proData.map((d, index) => {
                  const {
                    id,
                    name,
                    category,
                    price,
                    auction_start,
                    is_active,
                    is_closed,
                    is_paused,
                  } = d;
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          src={`http://localhost:8080/auction/image/${id}`}
                          className="card-img-top"
                          alt="error"
                          style={{ height: "70px", width: "70px" }}
                        />
                      </td>
                      <td>{name}</td>
                      <td>{category}</td>
                      <td>₹{price}</td>
                      <td>{new Date(auction_start).toString()}</td>
                      <td>
                        {is_active === 1
                          ? "Live"
                          : is_paused === 1
                            ? "Paused"
                            : is_closed === 1
                              ? "Closed"
                              : "Upcoming"}
                      </td>
                      <td>
                        <i
                          onClick={() => infohandler(id)}
                          class="bi bi-info-circle"
                          style={{ cursor: "pointer" }}
                        ></i>
                        {"    "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class={`bi bi-pen ${is_active || is_closed || is_paused ? 'disabled' : ''}`}
                          style={{
                            cursor: is_active || is_closed || is_paused ? 'not-allowed' : 'pointer',
                            pointerEvents: is_active || is_closed || is_paused ? 'none' : 'auto'
                          }}
                          onClick={() => {
                            if (!(is_active || is_closed || is_paused)) {
                              updatehandler(id);
                            }
                          }}
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                        </svg>
                        {"    "}
                        {/* <i
                          onClick={() => updatehandler(product_id)}
                          class="bi bi-info-circle"
                          style={{ cursor: "pointer" }}
                        ></i> */}
                        {"    "}
                        <i
                          onClick={() => deleteHandler(id)}
                          className="bi bi-trash"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading.........</h1>
      )}
    </div>
  );
}
