import React from 'react'
import Typography from '@mui/material/Typography';
import "./Navbar.css";
import "../../index.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div sx={{}}>
      <header className="header">
        <Link to="/" className="logo"><h3>BizAcuitySports</h3></Link>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/applyReimbursement">Apply Reimbursement</Link>
          <Link to="/equipmentBooking">Equipment Booking</Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
