import React from "react";


function About() {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Our University Cafeteria is dedicated to providing high-quality,
          affordable meals to students and staff. We believe in freshness,
          hygiene, and customer satisfaction.
        </p>

        <img
          src="https://media.istockphoto.com/id/1138204965/photo/chef-standing-behind-full-lunch-service-station-with-assortment-of-food-in-trays.jpg?s=612x612&w=0&k=20&c=M-7uLyd2cZQfHMQWXtsolHc-yThA8HVDrryhQfGktrY="
          alt="About Cafeteria"
        />
      </div>

      <div className="discounts-section">
        <h2>Special Discounts</h2>
        <ul>
          <li>🎓 Students: <span>30% OFF</span></li>
          <li>👩‍🏫 Faculty: <span>20% OFF</span></li>
          <li>🏢 Administration: <span>15% OFF</span></li>
        </ul>
      </div>

      <div className="menu-section">
        <h2>Weekly Menu</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Menu</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sunday</td><td>Biryani & Raita</td></tr>
            <tr><td>Monday</td><td>Chicken Karahi & Naan</td></tr>
            <tr><td>Tuesday</td><td>Aloo Keema & Chapati</td></tr>
            <tr><td>Wednesday</td><td>BBQ Platter & Salad</td></tr>
            <tr><td>Thursday</td><td>Vegetable Pulao & Raita</td></tr>
            <tr><td>Friday</td><td>Fish Fry & Fries</td></tr>
            <tr><td>Saturday</td><td>Pizza & Cold Drink</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;