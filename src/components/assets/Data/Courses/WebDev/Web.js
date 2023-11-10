import React, {useState} from "react";
import { webDat } from "./WebData";
import "./dev.css";
import { FaStar } from "react-icons/fa";

const Web = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowAll = () =>{
    setShowMore(!showMore);
  }
  return (
    <div className="ty">
      <div className="courseSection">
        <div className="Section">
          <div className="courseTitle">Our Courses</div>
          <div className="courseText">
            Learn from our best tutors around the world without limits.
          </div>
        </div>
      </div>
      {webDat.map((card, index) => (
        <div key={index} className="courset">
          <img
            alt={card.title}
            src={card.img}
            style={{ width: "400px", height: "270px" }}
            className="devImg"
          />
          <p className="devTitle">{card.title}</p>
          <h2 className="devDes">{card.description}</h2>
          <h5 className="devPrice">{card.price}</h5>
          <h5 className="devRating">
            {card.rating}
            <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
          </h5>
        </div>
      ))}
      <div className="container">
        <h1 className="head">What you'll learn</h1>
        <div>
          <ul>
            <li>Understand the basics of structuring web content using HTML tags.</li>
            <li>Learn how to style and design web pages, including layouts, fonts etc.</li>
            <li>Explore the fundamentals of JavaScript to add interactivity to web pages.</li>
            {showMore && (
              <>
                <li>Dive into popular frontend frameworks to build powerful, responsive, and interactive user interfaces</li>
                <li>Gain knowledge about server-side technologies to handle data, requests, and application logic.</li>
                <li>Learn how to manage and manipulate data in databases to create and maintain dynamic web applications.</li>
                <li>Understand version control systems to effectively manage and track changes in code, facilitating collaboration.</li>
                <li>Master the art of designing websites that adapt seamlessly to various screen sizes and devices.</li>
              </>
            )}
          </ul>
          <button onClick={toggleShowAll} style={{fontSize: '1rem', cursor: 'pointer'}}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        </div>
      </div>    
      <div>
            <h1 className="head">Course Content</h1>
        </div>
    </div>
  );
};

export default Web;
