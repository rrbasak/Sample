/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { TextField } from "@material-ui/core";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
export function UpdateProduct() {
  const { id } = useParams();
  const location = useLocation();
  const [start, setStart] = useState(location.state.productData.auction_start);
  const [end, setEnd] = useState(location.state.productData.endtime);
  const [product_id, setProduct_id] = useState(location.state.productData.id);
  const [category, setCatagory] = useState(
    location.state.productData.category
  );
  const [Othercategory, setOtherCatagory] = useState(
    location.state.productData.category
  );
  const [product_image, setFile] = useState(null);
  const [product_name, setName] = useState(
    location.state.productData.name
  );
  const [product_price, setMinimumpriced] = useState(
    location.state.productData.price
  );
  const [product_dtl, setDescription] = useState(
    location.state.productData.dtl
  );
  const [isPricePositiveError, setIsPricePositiveError] = useState(false);
  const [pricenumberError, setPriceNumberError] = useState("");
  const [isError1, setIsError1] = useState(false);
  const priceRef = useRef();
  const categories = [
    "Historic",
    "Weapons",
    "Art",
    "Book",
    "Automobile",
    "Jewellery",
    "Other",
  ];
  const [imageSrc, setImageSrc] = useState(
    `http://localhost:8080/auction/image/${product_id}`
  );
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  let navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (isPricePositiveError) {
      priceRef.current.focus();
      return;
    }
    const data = {
      category: category !== "Other" ? category : Othercategory,
      name: product_name,
      price: product_price,
      dtl: product_dtl,
      image: product_image,
      starttime:start,
      endtime:end,
    };
    console.log(data);
    console.log("Othercategory", Othercategory);
    await axios
      .put(`http://localhost:8080/auction/update/${product_id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          console.log("updated");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/view-product");
  };
  const checkisPricePositive = (value) => {
    if (value < 0) {
      setIsPricePositiveError(true);
      setPriceNumberError("Can not be negative");
    } else {
      setIsPricePositiveError(false);
    }
  };
  console.log(category);
  console.log(Othercategory);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">UPDATE PRODUCTS</h2>
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
                    value={categories.includes(category) ? category : "Other"}
                    onChange={(e) => setCatagory(e.target.value)}
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
            {category !== "Historic" &&
              category !== "Weapons" &&
              category !== "Art" &&
              category !== "Book" &&
              category !== "Automobile" &&
              category !== "Jewellery" && (
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
                    label="Enter Product "
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
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
                  />
                </div>
              </div>
            </div>
            {/* start and end time  */}
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
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              edit
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