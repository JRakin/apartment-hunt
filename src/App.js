import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navibar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';
import Details from './Components/Details';
import AddRent from './Components/Dashboard/AddRent';
import BookingList from './Components/Dashboard/BookingList';
import MyRent from './Components/Dashboard/MyRent';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });
  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Navibar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/Apartment/:id">
            <Details />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <PrivateRoute path="/BookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/AddRent">
            <AddRent />
          </PrivateRoute>
          <PrivateRoute path="/MyRent">
            <MyRent />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
