import React from 'react';

const Message = (props) => {

    const status = props.status;

    return (
        <>
            {
                status === true && <span style={
                    { backgroundColor: "green", padding: "10px", color: "white" }
                }>Data Added Successfully :) </span>
            }
            {
                status === false &&  <span style={
                    { backgroundColor: "red", padding: "10px", color: "white" }
                }>Something went wrong -_-  Please try again </span>
            }
        </>
    )
}

export default Message