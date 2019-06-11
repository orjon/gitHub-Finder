import React from "react";

const Alert = ({ alert, alertClicked }) => {
  //   const { alertClicked } = this.props;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`} onClick={alertClicked}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
