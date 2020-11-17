import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sidebar from './Sidebar';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetch('https://infinite-waters-22422.herokuapp.com/getAllBookings')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setBookings(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelect = (e, id) => {
    const status = e.target.value;
    const data = { status: status };
    console.log(status);
    fetch('https://infinite-waters-22422.herokuapp.com/updateBooking/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {});

    e.preventDefault();
  };

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
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Message</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((list) => renderTableData(list, handleSelect))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function renderTableData(list, handleSelect) {
  const { _id, name, email, mobile, message, status } = list;
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{message}</td>
      <td>
        <select
          value={status}
          onChange={(e) => handleSelect(e, _id)}
          className={
            status === 'pending'
              ? 'pending-status'
              : status === 'done'
              ? 'done-status'
              : 'onGoing-status'
          }
          name="status"
          id="status"
        >
          <option className="pending-status" value="pending">
            Pending
          </option>
          <option className="onGoing-status" value="on going">
            On Going
          </option>
          <option className="done-status" value="done">
            Done
          </option>
        </select>
      </td>
    </tr>
  );
}

export default BookingList;
