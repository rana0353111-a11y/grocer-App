import React from "react";
import "./HomePage.css";
import ContactUs from "../components/ContactUs";

// Images
import eggImg from "../assets/images/egg.jpg";
import breadImg from "../assets/images/bread.jpg";
import syrupImg from "../assets/images/syrups.png";
import chocolateImg from "../assets/images/chocolates.jpeg";
import oatImg from "../assets/images/oat.jpeg";
// import milkImg from "../assets/images/milk.jpeg"; // agar hai to uncomment

const HomePage = () => {
  const categories = [
    {
      title: "Breakfast Essential",
      items: [
        { id: 1, name: "Eggs", image: eggImg },
        { id: 2, name: "Bread", image: breadImg },
        { id: 3, name: "Syrups", image: syrupImg },
        { id: 4, name: "Milk", image: chocolateImg },
        { id: 5, name: "Chocolates", image: chocolateImg },
        { id: 6, name: "Oats", image: oatImg },
      ],
    },

    {
      title: "Milk & Dairy",
      items: [
        { id: 7, name: "Milk", image: eggImg },
        { id: 8, name: "Butter", image: breadImg },
        { id: 9, name: "Yogurt", image: syrupImg },
        { id: 10, name: "Cream", image: chocolateImg },
        { id: 11, name: "Cheese", image: oatImg },
        { id: 12, name: "Ice Cream", image: eggImg },
      ],
    },

    {
      title: "Fruits & Vegetables",
      items: [
        { id: 13, name: "Apple", image: eggImg },
        { id: 14, name: "Banana", image: breadImg },
        { id: 15, name: "Carrot", image: syrupImg },
        { id: 16, name: "Tomato", image: chocolateImg },
        { id: 17, name: "Mango", image: oatImg },
        { id: 18, name: "Grapes", image: breadImg },
      ],
    },

    {
      title: "Meat & Seafood",
      items: [
        { id: 19, name: "Chicken", image: eggImg },
        { id: 20, name: "Fish", image: breadImg },
        { id: 21, name: "Mutton", image: syrupImg },
        { id: 22, name: "Prawns", image: chocolateImg },
        { id: 23, name: "Beef", image: oatImg },
        { id: 24, name: "Crab", image: eggImg },
      ],
    },

    {
      title: "Daal, Rice, Atta & Cheeni",
      items: [
        { id: 25, name: "Rice", image: eggImg },
        { id: 26, name: "Daal", image: breadImg },
        { id: 27, name: "Atta", image: syrupImg },
        { id: 28, name: "Sugar", image: chocolateImg },
        { id: 29, name: "Salt", image: oatImg },
        { id: 30, name: "Flour", image: breadImg },
      ],
    },

    {
      title: "Edible Oils & Ghee",
      items: [
        { id: 31, name: "Oil", image: eggImg },
        { id: 32, name: "Ghee", image: breadImg },
        { id: 33, name: "Olive Oil", image: syrupImg },
        { id: 34, name: "Butter Oil", image: chocolateImg },
        { id: 35, name: "Sunflower Oil", image: oatImg },
        { id: 36, name: "Canola Oil", image: eggImg },
      ],
    },

    {
      title: "Spices & Herbs",
      items: [
        { id: 37, name: "Salt", image: eggImg },
        { id: 38, name: "Pepper", image: breadImg },
        { id: 39, name: "Turmeric", image: syrupImg },
        { id: 40, name: "Cumin", image: chocolateImg },
        { id: 41, name: "Coriander", image: oatImg },
        { id: 42, name: "Chili Powder", image: breadImg },
      ],
    },

    {
      title: "Sauces & Pastes",
      items: [
        { id: 43, name: "Ketchup", image: eggImg },
        { id: 44, name: "Mayonnaise", image: breadImg },
        { id: 45, name: "Chili Sauce", image: syrupImg },
        { id: 46, name: "Garlic Paste", image: chocolateImg },
        { id: 47, name: "Soy Sauce", image: oatImg },
        { id: 48, name: "Mustard", image: eggImg },
      ],
    },
  ];

  return (
    <div className="content">

      <h1>Categories</h1>

      {categories.map((category, index) => (
        <div key={index} className="breakfast">

          <h2>{category.title}</h2>

          <div className="breakfast-image">

            {category.items.map((item) => (
              <div key={item.id} className="card">

                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

              </div>
            ))}

          </div>
        </div>
      ))}

      {/* CONTACT SECTION */}
      <ContactUs />

    </div>
  );
};

export default HomePage;