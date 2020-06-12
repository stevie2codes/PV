import React from "react";
import "../styles/locations.scss";
const Locations = () => {
  return (
    <div className="content">
      <div className="cards">
        <div className="hermLocation">
          <h3 className="location">Hermitage</h3>
          <p>
            4640 Lebanon pike <br /> Hermitage,Tn 37076
          </p>
          <p>
            Monday-Saturday 10am-7pm <br /> Sunday 12pm-5pm
          </p>

          <a className="phone" href="tel:+1615-915-2197">
            615-915-2197
          </a>
        </div>

        <div className="madLocation">
          <h3 className="location">Madison</h3>
          <p>
            455 Myatt Dr. <br /> Madison,Tn 37155
          </p>
          <p>
            Monday-Saturday 10am-7pm <br /> Sunday 12pm-5pm
          </p>
          <a className="phone" href="tel:+1615-942-8022">
            615-942-8022
          </a>
        </div>
      </div>
    </div>
  );
};

export default Locations;
