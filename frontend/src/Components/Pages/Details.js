import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Details() {
  const location = useLocation();
  const pDetails = location?.state?.pDetails;
  const [bids, setBids] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/bid/auction/${pDetails.id}`)
      .then((res) => {
        console.log(res.data);
        setBids(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("bids: ", bids);

  return (
    <div className="row">
      <div>
        <h3>Product Name: {pDetails.name}</h3>
      </div>
      <div>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Bid Amount</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.bid_id}>
                <td>{bid.user.id}</td>
                <td>{bid.user.userName}</td>
                <td>{bid.bidTimestamp}</td>
                <td>₹{bid.bidAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}