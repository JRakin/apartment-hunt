import React from 'react';

const PricingDetails = ({ apartmentData }) => {
  return (
    <div>
      <div className="container my-5">
        <h2>{apartmentData.name}</h2>
        <div className="row">
          <div className="col-md-6">
            <h3 className="price">BDT {apartmentData.price}/-</h3>
            <p>{apartmentData.details}</p>
            <h3 className="theme-text">Price Deatils</h3>
            <p>{apartmentData.price}/ Month</p>
            {/* <span>
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
            </span> */}
          </div>
          <div className="col-md-6">
            <h3 className="theme-text">Property Deatils</h3>
            <p>{apartmentData.location}</p>
            {/* <p>
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
            </p> */}
            ,
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
