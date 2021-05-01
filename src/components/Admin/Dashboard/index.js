import React, {useState} from 'react';

const Dashborad = () => {
    const info = sessionStorage.getItem('user');
    const [user, setUser] = useState(info);

    return (
        <>
            <p>Hi {user}! This is your dashboard! </p>
        </>
    )
}

export default Dashborad;