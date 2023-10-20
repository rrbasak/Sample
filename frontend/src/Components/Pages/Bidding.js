import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../../Styles/Bidding.css';
import TextField from "@material-ui/core/TextField";
import axios from "axios";
function Bidding() {
  const user_id = localStorage.getItem("id");
  const location = useLocation();
  const pDetails = location.state?.pDetails;
  const [currentBid, setCurrentBid] = useState(null);
  const [stateBid, setStateBid] = useState("");
  const [miniBid, setminiBid] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [showAuctionClosingMessage, setShowAuctionClosingMessage] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`http://localhost:8080/auction/read/${pDetails.id}`)
        .then((response) => {
          if (response.data.highestbid !== 0.0) {
            setCurrentBid(response.data.highestbid);
          } else {
            setCurrentBid(response.data.price + response.data.priceInterval);
          }
          setminiBid(response.data.priceInterval);
          const endTime = new Date(pDetails.auction_end).getTime();
          const currentTime = new Date().getTime();
          const timeLeft = Math.max(0, endTime - currentTime);
          if (timeLeft <= 20000 && !showAuctionClosingMessage) {
            setShowAuctionClosingMessage(true);
          }
          setTimeRemaining(timeLeft);
          if (timeLeft <= 0) {
            setIsAuctionEnded(true);
            setShowAuctionClosingMessage(false);
            clearInterval(interval);
          }
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [pDetails.id, pDetails.auction_end, showAuctionClosingMessage]);
  const handleChange = (value) => {
    setStateBid(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if ((stateBid - pDetails.price) % pDetails.priceInterval === 0) {
      axios
        .post("http://localhost:8080/bid/place", null, {
          params: {
            userId: user_id,
            auctionItemId: pDetails.id,
            bidAmount: parseFloat(stateBid),
          },
        })
        .then((res) => {
          document.getElementById("warning").style.display = "none";
        })
        .catch((error) => {
          console.log("error: ", error);
          document.getElementById("warning").style.display = "block";
        });
      setStateBid("");
    } else {
      document.getElementById("warning").style.display = "block";
    }


  };
  const formatTime = (time) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <>
      <section style={{ backgroundColor: "#111", minHeight: "100vh" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={`http://localhost:8080/auction/image/${pDetails.id}`}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 300 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Product Name: </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{pDetails.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Product Details:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{pDetails.dtl}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">current Bid:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentBid}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Minimum Increment Bid:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{miniBid}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Auction Ends In:</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {formatTime(timeRemaining)}
                      </p>
                    </div>
                  </div>
                  <hr></hr>
                  {/*MAIN BID*/}
                  <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-sm-3">
                      <p className="mb-0">Place Bid: </p>
                    </div>
                    <div className="col-sm-9">
                      {isAuctionEnded ?
                        (<div className="alert alert-danger" role="alert">
                          Auction has ended. Bidding is closed.
                        </div>)
                        :
                        <form className="row" onSubmit={handleSubmit}>
                          <div className="col">
                            <span className="text-muted mb-0">
                              <TextField
                                id="outlined-number"
                                label="Enter Price"
                                type="text"
                                variant="outlined"
                                name="stateBid"
                                value={stateBid}
                                autoComplete="off"
                                onChange={(e) => handleChange(e.target.value)}
                              />
                            </span>
                          </div>
                          <div className="col">
                            <button className="btn btn-warning" type="submit">
                              Enter
                            </button>
                          </div>
                        </form>
                      }
                    </div>
                  </div>
                  <p
                    className="text-danger"
                    id="warning"
                    style={{ display: "none" }}
                  >
                    *your bid amount should have be strictly
                    <strong> greater than </strong> the
                    <strong> {miniBid + currentBid} </strong>
                    and also multiple of
                    <strong> minimum Increment bid</strong>
                  </p>
                  <hr />
                  <p className="text-danger">
                    *After putting the "Price" press the "Enter" button for
                    placing the bid
                  </p>
                </div>
              </div>
            </div>
          </div>
          {showAuctionClosingMessage && (
            <div className="auction-message">
              AUCTION CLOSES SOON!
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default Bidding;