import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/403571/" alt="" />
        <div className="user">
          <img src="https://images.pixels.com/photos/22045" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
