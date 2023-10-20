import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function ProductInfo() {
  const [option, setOption] = useState(null);
  const { id } = useParams();
  const [logdata, setLogdata] = useState(null);
  const [currentBid, setCurrentBid] = useState(null);
  const [bids, setBids] = useState([]);
  const [bidsorted, setBidsorted] = useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/auction/read/${id}`)
      .then((response) => {
        setLogdata(response.data);
        localStorage.setItem("productInfo", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.error(err);
      });
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/bid/auction/${id}`)
      .then((res) => {
        setBids(res.data);
        setCurrentBid(res.data[Object.keys(res.data).length-1].bidAmount);
        setBidsorted(res.data.sort((a, b) => {
          if (a.bidAmount < b.bidAmount) return 1;
          else if (a.bidAmount > b.bidAmount) return -1;
          else return 0;
        }));
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("sorted: ",bidsorted);

  const optionHandler = (option) => {
    setOption(option);
  };
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/view-product">Product</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product Info
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={`http://localhost:8080/auction/image/${id}`}
                    alt="avatar"
                    //className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0 d-flex">
                  {logdata ? (
                    logdata.is_active === 1 &&
                      logdata.is_closed === 0 &&
                      logdata.is_paused === 0 ? (
                      <>
                        <div
                          className="alert alert-success m-0 p-5"
                          role="alert"
                        >
                          Auction Live
                        </div>
                        <div className="p-5" role="alert">
                          Highest Bid {currentBid}
                        </div>
                      </>
                    ) : logdata.is_active === 0 &&
                      logdata.is_closed === 0 &&
                      logdata.is_paused === 1 ? (
                      <>
                        <div
                          className="alert alert-warning m-0  p-5"
                          role="alert"
                        >
                          Auction Paused
                        </div>
                        <div className="p-5" role="alert">
                          Highest Bid {currentBid}
                        </div>
                      </>
                    ) : logdata.is_active === 0 &&
                      logdata.is_closed === 1 &&
                      logdata.is_paused === 0 ? (
                      <>
                        <div
                          className="alert alert-danger m-0 p-5 "
                          role="alert"
                        >
                          Auction Closed
                        </div>
                        <div className="p-5" role="alert">
                          {/* bidding price */}
                          Highest Bid {currentBid}
                        </div>
                      </>
                    ) : <>
                      <div
                        className="alert alert-warning m-0 p-5 "
                        role="alert"
                      >
                        Upcoming...
                      </div>
                      <div className="p-5" role="alert">
                        No Bid till now
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {logdata ? (
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Product Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {logdata.name}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Category</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {logdata.category}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Bid price</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {logdata.price}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Details</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{logdata.dtl}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
              <div className="row">
                <div className="col-md-12">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${option === "history" ? "active" : ""
                            }`}
                          href="#history"
                          onClick={() => optionHandler("history")}
                        >
                          History
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${option === "information" ? "active" : ""
                            }`}
                          href="#information"
                          onClick={() => optionHandler("information")}
                        >
                          Information
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${option === "winner" ? "active" : ""
                            }`}
                          href="#winner"
                          onClick={() => optionHandler("winner")}
                        >
                          Winner
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {(logdata && (logdata.is_active ===1  || logdata.is_closed ===1)) && option === "history" && (
                  <div className="col-md-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Price</th>
                          <th>Bid Time</th>
                          <th>User</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bids.map((bid) => (
                          <tr key={bid.bid_id}>
                            <td>₹{bid.bidAmount.toFixed(2)}</td>
                            <td>{new Date(bid.bidTimestamp).toString()}</td>
                            <td>{bid.user.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {option === "information" && (
                  <div className="col-md-12">
                    {logdata ? (
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Auction Id</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{id}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Auction Price</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                ₹{logdata.price}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">Bid Start time</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{new Date(logdata.auction_start).toString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>
                )}




                {(logdata && logdata.is_closed===1) && option === "winner" && (
                  <div className="col-md-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>User Id</th>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Bid Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                          <tr key={bidsorted[0].bid_id}>
                            <td>{bidsorted[0].user.id}</td>
                            <td>{bidsorted[0].user.name}</td>
                            <td>{new Date(bidsorted[0].bidTimestamp).toString()}</td>
                            <td>₹{bidsorted[0].bidAmount.toFixed(2)}</td>
                          </tr>
                        
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}