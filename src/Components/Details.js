import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Details = () => {
  const [apartmentData, setApartmentData] = useState({});

  const { id } = useParams();

  const location = useLocation();

  console.log(location.state.apartment);

  useEffect(() => {
    // fetch('http://localhost:4000/getApartment/' + id)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setApartment(data);
    //     console.log(data);
    //   });

    if (location.state) {
      setApartmentData(location.state.apartment);
    }
  }, [location.state]);

  console.log(apartmentData);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    const newData = { ...data, status: 'pending' };
    console.log(newData);

    fetch('http://localhost:4000/addBooking', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    }).then((result) => {
      e.target.reset();
      alert('Done');
    });
  };

  return (
    <>
      <section className="banner">
        <div className="layer">
          <h1>{apartmentData.name}</h1>
        </div>
      </section>
      <div className="container ">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-12">
                <img src={apartmentData.photo_1} className="w-100 m-2" alt="" />
              </div>
              <div className="col-3">
                <img src={apartmentData.photo_2} className="w-100 m-2" alt="" />
              </div>
              <div className="col-3">
                <img src={apartmentData.photo_3} className="w-100 m-2" alt="" />
              </div>
              <div className="col-3">
                <img src={apartmentData.photo_4} className="w-100 m-2" alt="" />
              </div>
              <div className="col-3">
                <img src={apartmentData.photo_5} className="w-100 m-2" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-3">
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your name"
                ref={register({ required: true })}
              />
              {errors.name && (
                <small className="text-danger">This field is required</small>
              )}{' '}
              <br />
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email address"
                ref={register({ required: true })}
              />
              {errors.email && (
                <small className="text-danger">This field is required</small>
              )}{' '}
              <br />
              <input
                type="text"
                className="form-control"
                name="mobile"
                placeholder="Phone number"
                ref={register({ required: true })}
              />
              {errors.mobile && (
                <small className="text-danger">This field is required</small>
              )}
              <br />
              <textarea
                className="form-control"
                rows="6"
                name="instruction"
                placeholder="Message..."
                ref={register({ required: false })}
              ></textarea>
              {errors.instruction && (
                <small className="text-danger">This field is required</small>
              )}
              <br /> <br />
              <input
                className="btn btn-info w-100"
                type="submit"
                value="Request booking"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2>{apartmentData.name}</h2>
        <div className="row">
          <div className="col-md-6">
            <h3 className="price">BDT {apartmentData.price}/-</h3>
            <p>{apartmentData.details}</p>
            <h3 className="theme-text">Price Deatils</h3>
            <span>
              Rent Per Month : BDT {apartmentData.pricing.rentPerMonth}/-
            </span>{' '}
            <br />
            <span>
              Service Charge : BDT {apartmentData.pricing.ServiceCharge}/-
            </span>{' '}
            <br />
            <span>
              Security Deposit : {apartmentData.pricing.securityDeposit} months
              rent
            </span>{' '}
            <br />
            <span>
              Flat Release Policy : {apartmentData.pricing.flatReleasePolicy}{' '}
              months earlier notice required
            </span>
          </div>
          <div className="col-md-6">
            <h3 className="theme-text">Property Deatils</h3>
            <p>
              {apartmentData.propertyDetails.address.road} ,
              {apartmentData.propertyDetails.address.houseNo} ,
              {apartmentData.propertyDetails.address.street} ,
              {apartmentData.propertyDetails.address.city}
            </p>
            <p>{apartmentData.propertyDetails.flatSize} Sq-ft.</p>
            <p>{apartmentData.propertyDetails.facilities}</p>
            <p>
              {apartmentData.propertyDetails.additionalFacilities.number1} ,
              {apartmentData.propertyDetails.additionalFacilities.number2} ,
              {apartmentData.propertyDetails.additionalFacilities.number3} ,
              {apartmentData.propertyDetails.additionalFacilities.number4} ,
              {apartmentData.propertyDetails.additionalFacilities.number5}
            </p>
            ,
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
