import React, { useEffect, useState } from "react";

function Home() {
    const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const loadDishes = () => {
      const demoDishes = [
    { name: "Biryani", price: "Rs. 350", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-g_bCDrGGqRLb6AX_h_OpUxtfhx_fC4pzg&s" },
    { name: "Burger", price: "Rs. 400", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_GQVXsInl1noBqhXm6B1-vkqIuyi0JStKQ&s" },
    { name: "Pizza", price: "Rs. 900", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXSH5sF5LdtmDfNxiht4k2WWrOr7Ykr5ewkQ&s" },
    { name: "Fries", price: "Rs. 200", img: "https://media.gettyimages.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=gi&k=20&c=0xqKNm7b0f94TKAwR-99vkohcHkAppuXBVbLKNArY3A=" },
    { name: "Sandwich", price: "Rs. 250", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHpQE_f4I9H2TMoaVVdXf4TDlp8kPa7-JfQ&s" },
  ];
      setDishes(demoDishes);
    };

    setTimeout(loadDishes, 1000);
  }, []);
  return ( 
    <>
      <section className="intro-section">
        <div className="intro-image">
          <img
            src="https://media.istockphoto.com/id/174960201/photo/middle-school-students-choosing-healthy-food-in-cafeteria-lunch-line.jpg?s=612x612&w=0&k=20&c=kIlws_qDGlVTWkWT9kx8fkyaAgrURMbkjUZt_rNAV4Y="
            alt="Cafeteria"
          />
        </div>
        <div className="intro-text">
          <h2>Welcome to Our Cafeteria</h2>
          <p>
            At Ibadat International University Cafeteria, we provide fresh and
            hygienic meals for students and staff. From delicious biryani to
            crispy fries, our menu has something for everyone. Enjoy your meals
            in a friendly and comfortable environment.
          </p>
        </div>
      </section>
    
      <section className="details">
        <h2>Why Choose Us?</h2>
        <p>
          ✅ Fresh & Healthy Meals <br />
          ✅ Affordable Prices <br />
          ✅ Hygienic Environment <br />
          ✅ Quick Service <br />
          ✅ Variety of Dishes <br />
        </p>
      </section>

      <div className="home-container">
        <div className="deals-container">
          <h2>Our Special Deals</h2>

          {dishes.length === 0 ? (
            <p>Loading dishes...</p> 
          ) : (
            <div className="deals-grid">
              {dishes.map((dish, index) => (
                <div key={index} className="deal-card">
                  <img src={dish.img} alt={dish.name} />
                  <h3>{dish.name}</h3>
                  <p>{dish.price}</p>
                  <button>Order Now</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Home;