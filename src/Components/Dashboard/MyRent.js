import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { UserContext } from '../../App';

const MyRent = () => {
  const [bookingsList, setBookingsList] = useState([]);

  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch('https://infinite-waters-22422.herokuapp.com/getAll')
      .then((res) => res.json())
      .then((data) => {
        setBookingsList(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{bookingsList.map((list) => renderTableData(list))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function renderTableData(list) {
  const { _id, name, price } = list;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button style={{ color: '#fff' }} className="btn">
          View Details
        </button>
      </td>
    </tr>
  );
}

export default MyRent;
