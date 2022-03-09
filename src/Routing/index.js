import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { Depertment } from '../Pages/Depertment';
import { Employee } from '../Pages/Employee';

export const Routing = () => {
    return (
            <Routes>
                <Route index element={<Employee />} />
                <Route path="depertment" element={<Depertment />} />
            </Routes>
    )
}
