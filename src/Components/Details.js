import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PricingDetails from './PricingDetails';

const Details = () => {
  const [apartmentData, setApartmentData] = useState({});

  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    fetch(`https://infinite-waters-22422.herokuapp.com/getApartment/${id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setApartmentData(data);
        console.log(data);
      });
  }, [id]);

  console.log(apartmentData);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    const newData = { ...data, status: 'pending' };
    console.log(newData);

    fetch('https://infinite-waters-22422.herokuapp.com/addBooking', {
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
      <PricingDetails key={id} apartmentData={apartmentData}></PricingDetails>
    </>
  );
};

export default Details;
