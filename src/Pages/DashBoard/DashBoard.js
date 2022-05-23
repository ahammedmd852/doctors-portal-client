import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <h2 className="text-3xl text-purple-500 font-serif">DashBoard</h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
