import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroFooter from "../Asset/Footer";
import Hero from "../Asset/Hero";

const ThriversDaily = () => {
  const [Blog, setBlog] = useState([]);
  const fetchDataBlog = () => {
    return axios
      .get(
        `https://thrivers-assignment-server.onrender.com/ThrivesDailyRouter/getAllBlog`
      )
      .then((response) => setBlog(response.data.content));
  };
  useEffect(() => {
    fetchDataBlog();
  }, []);
  console.log(Blog);
  return (
    <div>
      <Hero />
      {Blog.map((x) => (
        <div className="mx-5 ">
          <h3
            className="text-center my-3"
            style={{ color: " rgba(34, 110, 147, 1)" }}
          >
            {x.Title}
          </h3>
          <h5 className="text-end">-{x.Writer}</h5>
          <div className="my-5">{x.Blog}</div>
        </div>
      ))}

      <HeroFooter />
    </div>
  );
};

export default ThriversDaily;
