import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Apartments from './Apartments';
import service1 from '../images/icons/apartment 1.png';
import service2 from '../images/icons/affordable 1.png';
import service3 from '../images/icons/lessee 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  // const handleSendData = () => {
  //   fetch('http://localhost:4000/addAll', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(apartmentData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const [apartmentData, setApartmentData] = useState([]);

  useEffect(() => {
    fetch('https://infinite-waters-22422.herokuapp.com/getAll')
      .then((res) => res.json())
      .then((data) => {
        setApartmentData(data);
      });
  }, []);
  return (
    <>
      <section className="banner">
        <div className="layer">
          <h1>FIND YOUR HOUSE RENT</h1>
          <br />
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
            />
            <Button className="btn ml-3" variant="info">
              Find Now
            </Button>
          </div>
        </div>
      </section>
      {/* apartments */}
      <section className="">
        <div className="text-center mt-3 theme-text">
          <span>House Rent</span>
          <h2>
            Discover The Latest Rent <br /> Available Today
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {apartmentData.map((apartment) => (
              <Apartments
                key={apartment._id}
                apartment={apartment}
              ></Apartments>
            ))}
          </div>
        </div>
      </section>
      {/* service */}
      <section className="my-5">
        <div className="text-center mb-3 theme-text">
          <span>Service</span>
          <h2>
            We're an agency tailored to all <br /> clients' need that always
            delivers
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-3 text-center">
              <img className="w-25" src={service1} alt="" /> <br /> <br />
              <b>Wide Range of properties</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet elit. Est, enim.Rerum, optio!
              </p>
            </div>
            <div className="col-md-4 p-3 text-center">
              <img className="w-25" src={service2} alt="" /> <br /> <br />
              <b>Financing Made Easy</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet elit. Est, enim. Rerum, optio!
              </p>
            </div>
            <div className="col-md-4 p-3 text-center">
              <img className="w-25" src={service3} alt="" /> <br /> <br />
              <b>Trusted By Thousand</b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet elit. Est, enim. Rerum, optio!
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-md-5">
              <h5>Contact</h5>
              <span>
                <FontAwesomeIcon icon={faMapMarker} /> House-no 115/c ( 4th
                floor ) , Road-no #2 <br /> Mohakhali , Dhaka 1000.
              </span>{' '}
              <br />
              <span>
                <FontAwesomeIcon icon={faPhone} /> +880-1712-112255{' '}
              </span>{' '}
              <br />
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> Apartment.hunt@gmail.com{' '}
              </span>{' '}
              <br />
            </div>
            <div className="col-md-2">
              <h5>Company</h5>
              <ul>
                <li>About</li>
                <li>Site map</li>
                <li>Terms </li>
                <li>conditions</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Quick Links</h5>
              <ul>
                <li>FAQ</li>
                <li>Help</li>
                <li>Refund policy</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>About</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                repellendus dignissimos blanditiis.
              </p>
              <div
                style={{ fontSize: '30px' }}
                className="d-flex justify-content-between mt-2"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
