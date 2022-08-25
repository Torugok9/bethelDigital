import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import DashBoard from '../pages/DashBoard/dashBoard';
import Church from '../pages/Church/church';

function Routers(){
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<DashBoard />}/>                    
                <Route path='/a-igreja' element={<Church />} />
            </Routes>
        </Router>
    )
}

export default Routers;