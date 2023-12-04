import React from 'react';
import "assets/scss/successfail.scss";

const SuccessFailedMessage = ({ type, message }) => {
    // return (
    //     <div className={`message ${type}`}>
    //     {message}
    //     </div>
    // );
    return (
        <div className={`message ${type}`}>
            <span>{message}</span>
            <button className="close" >X</button>
        </div>
    );
}

export default SuccessFailedMessage;