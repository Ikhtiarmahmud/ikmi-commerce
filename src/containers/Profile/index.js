import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import Category from '../../components/Admin/Category';
import Dashboard from '../../components/Admin/Dashboard';
import {
    Grid
} from '@material-ui/core';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams();

    let component;

    switch (params.slug) {
        case "category":
            component = (<Category />);
            break;
        default:
            component = (<Dashboard />);
    }

    return (
        <Grid style={{
        marginTop: "20px", padding: "0 35px"}} container spacing={3}>
            <Grid item
                    md={2}
                    xs={6}
                    sm={4}>
                <Sidebar />
            </Grid>
           <Grid item
                 md={10}
                 xs={12}
                 sm={8}>   
                {component}
           </Grid>
        </Grid>
       
    )
}

export default Profile;