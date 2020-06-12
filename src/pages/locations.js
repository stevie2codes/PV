import React from "react";
import "../styles/locations.scss";
const Locations = () => {
  return (
    <div className="content">
      <div className="cards">
        <div className="hermLocation">
          <h2 className="location">Hermitage</h2>
          <h3>Address</h3>
          <p>
            4640 Lebanon pike <br /> Hermitage,Tn 37076
          </p>
          <h3>Hours</h3>
          <p>
            Monday-Saturday 10am-7pm <br /> Sunday 12pm-5pm
          </p>
          <div className="phoneContainer">
            <h3>Phone</h3>
            <a className="phone" href="tel:+1615-915-2197">
              <h3> 615-915-2197</h3>
            </a>
          </div>
        </div>

        <div className="madLocation">
          <h2 className="location">Madison</h2>
          <h3>Address</h3>
          <p>
            455 Myatt Dr. <br /> Madison,Tn 37155
          </p>
          <h3>Hours</h3>
          <p>
            Monday-Saturday 10am-7pm <br /> Sunday 12pm-5pm
          </p>
          <div className="phoneContainer">
            <h3>Phone</h3>
            <a className="phone" href="tel:+1615-942-8022">
              <h3>615-942-8022</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
