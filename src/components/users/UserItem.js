import React from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";
import PropTypes from "../../../node_modules/prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
