import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <div className="p-3">
            <Link to="/BookingList"><FontAwesomeIcon icon={faShoppingBasket} /> Booking list</Link> <br /> <br />
            <Link to="/AddRent"><FontAwesomeIcon icon={faPlus} /> Add rent house</Link> <br /> <br />
            <Link to="/MyRent"><FontAwesomeIcon icon={faHome} /> My rent</Link>
        </div>
    );
};

export default Sidebar;