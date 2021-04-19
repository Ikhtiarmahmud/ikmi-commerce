import React from 'react';

const Message = (props) => {

    const status = props.status;

    return (
        <>
            {
                status === true && <span style={
                    { backgroundColor: "green", padding: "10px", color: "white" }
                }>{props.message} </span>
            }
            {
                status === false &&  <span style={
                    { backgroundColor: "red", padding: "10px", color: "white" }
                }>{props.message}</span>
            }
        </>
    )
}

export default Message