import React from "react";
import "./index.css";

function Location() {
  return (
    <>
      <div className="location-hero">
        <div className="location-text">
          <h1>Our Location</h1>
          <p>
            Our main cafeteria is located inside the Ibadat International
            University, Islamabad. We provide a comfortable space where students,
            faculty, and staff can enjoy fresh meals every day.
          </p>
        </div>
        <div className="location-map">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZX8JjP6rfqaulKVCaMabXZAT6wAuWqfGAug&s" alt="map"></img> 
       
           </div>
      </div>

      <div className="location-branches">
        <h2>📍 Our Branches</h2>
        <ul>
          <li>Islamabad – Main Campus</li>
          <li>Lahore – City Campus</li>
          <li>Karachi – Regional Center</li>
          <li>Peshawar – Sub Campus</li>
        </ul>

        <div className="progress-info">
          <h3>🌟 Our Progress</h3>
          <p>
            We have successfully expanded our cafeteria services across multiple
            campuses. Every branch ensures high-quality meals, hygiene, and a
            student-friendly environment.
          </p>
        </div>
      </div>

      <div className="location-hours">
        <h2>⏰ Opening Hours</h2>
        <table>
          <tbody>
            <tr>
              <td>Monday - Friday</td>
              <td>8:00 AM - 8:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>9:00 AM - 6:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Location;