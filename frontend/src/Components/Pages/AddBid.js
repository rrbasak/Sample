import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export function AddBid() {
  const [category, setCatagory] = useState("");
  const [Othercategory, setOtherCatagory] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [priceinterval, setPriceInterval] = useState("");
  const [product_name, setProduct] = useState("");
  const [product_price, setMinimumpriced] = useState("");
  const [product_dtl, setDescription] = useState("");
  const [isPriceIntervalPositiveError, setIsPriceIntervalPositiveError] = useState(false);
  const [priceIntervalnumberError, setPriceIntervalNumberError] = useState("");
  const [isPricePositiveError, setIsPricePositiveError] = useState(false);
  const [pricenumberError, setPriceNumberError] = useState("");
  const [product_image, setFile] = useState(null);
  const [isError1, setIsError1] = useState(false);
  const [isError2, setIsError2] = useState(false);
  const priceRef=useRef();
  const MinpriceRef = useRef();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const categories = [
    "Historic",
    "Weapons",
    "Art",
    "Book",
    "Automobile",
    "Jewellery",
    "Other",
  ];
  let navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isPricePositiveError) {
      priceRef.current.focus();
      return;
    }
    if (isPriceIntervalPositiveError) {
      MinpriceRef.current.focus();
      return;
    }
    const data = {
      "category": category ? category : Othercategory,
      "starttime": start+'Z',
      "endtime":end+'Z',
      "created":localStorage.getItem("userName"),
      "priceinterval": priceinterval,
      "name": product_name,
      "price": product_price,
      "dtl": product_dtl,
      "image": product_image,
    };
   
    console.log(data);
    await axios
      .post("http://localhost:8080/auction/save", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((e) => {
        console.log(e.data);
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/view-product");
  };

  const checkisPriceIntervalPositive = (value) => {
    if (value < 0) {
      setIsPriceIntervalPositiveError(true);
      setPriceIntervalNumberError("Can not be negative");
    } else {
      setIsPriceIntervalPositiveError(false);
    }
  };

  const checkisPricePositive = (value) => {
    if (value < 0) {
      setIsPricePositiveError(true);
      setPriceNumberError("Can not be negative");
    } else {
      setIsPricePositiveError(false);
    }
  };
  return (
    <div className="container" style={{marginTop: '40px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: "#fff"}}>
          <h2 className="text-center m-4">Add Auction Product</h2>
          <form onSubmit={submitHandler}>
            {/* category */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <select
                    type={"text"}
                    className="form-control"
                    placeholder="Catagory"
                    name="category"
                    label="Category"
                    value={category}
                    onChange={(e) => setCatagory(e.target.value)}
                    required
                  >
                    <option value="">Select a Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* other */}
            {category === "Other" && (
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <TextField
                      type={"text"}
                      className="form-control"
                      placeholder="Choose Category"
                      name="Othercategory"
                      label="Category"
                      value={Othercategory}
                      onChange={(e) => setOtherCatagory(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            {/* setProduct */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Product Name"
                    name="product"
                    value={product_name}
                    label="Enter Product Name"
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            {/* set min price */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"number"}
                    className="form-control"
                    placeholder="Minimum price"
                    name="firstName"
                    error={isError1}
                    value={product_price}
                    label="Enter Minimum price"
                    onChange={(e) => {
                      setMinimumpriced(e.target.value);
                      checkisPricePositive(e.target.value);
                      if (isPricePositiveError) {
                        setIsError1(true);
                      }
                      if (!isPricePositiveError) {
                        setIsError1(false);
                      }
                    }}
                    onKeyUp={(e) => checkisPricePositive(e.target.value)}
                    inputRef={priceRef}
                    required
                  />
                  {isPricePositiveError && (
                    <span style={{ color: "red" }}>{pricenumberError}</span>
                  )}
                </div>
              </div>
            </div>
            {/* setDescription */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <TextField
                    type={"text"}
                    className="form-control"
                    placeholder="Description"
                    name="firstName"
                    value={product_dtl}
                    label="Enter Product Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            {/* setImage */}
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                    accept=".jpg, .jpeg, .png"
                    required
                  />
                </div>
              </div>
            </div>
            {/* setDate and setPriceInterval*/}
            <div className="mb-3">
              <div className="row">
                <div className="col-md-6">
                  <TextField
                    type={"datetime-local"}
                    className="form-control"
                    name="start"
                    label="Start Time"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    type={"datetime-local"}
                    className="form-control"
                    name="end"
                    label="End Time"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    type={"number"}
                    className="form-control"
                    placeholder="Enter Price Interval"
                    name="pricenterval"
                    error={isError2}
                    label="Price Interval"
                    value={priceinterval}
                    onChange={(e) => {
                      setPriceInterval(e.target.value);
                      checkisPriceIntervalPositive(e.target.value);
                      if (isPriceIntervalPositiveError) {
                        setIsError2(true);
                      }
                      if (!isPriceIntervalPositiveError) {
                        setIsError2(false);
                      }
                    }}
                    onKeyUp={(e) =>
                      checkisPriceIntervalPositive(e.target.value)
                    }
                    inputRef={MinpriceRef}
                    required
                  />
                  {isPriceIntervalPositiveError && (
                    <span style={{ color: "red" }}>
                      {priceIntervalnumberError}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/view-product">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}