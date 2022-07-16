import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import DashBoard from '../pages/DashBoard/dashBoard';

function Routers(){
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<DashBoard />}/>                    
            </Routes>
        </Router>
    )
}

export default Routers;