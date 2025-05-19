import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Salary from "./Salary";
import List from "./SalaryList";
import EditSalary from "./EditSal";

export default function Navbar() {
    return (
        <Router>
            <div>
                {/* Navbar */}
                <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
                    <div className="space-x-4">
                        <Link className="hover:bg-green-800 px-3 py-2 rounded transition" to="/">Home</Link>
                        <Link className="hover:bg-green-800 px-3 py-2 rounded transition" to="/salary">Salary</Link>
                        <Link className="hover:bg-green-800 px-3 py-2 rounded transition" to="/department">Department</Link>
                        <Link className="hover:bg-green-800 px-3 py-2 rounded transition" to="/employee">Employee</Link>
                        <Link className="hover:bg-green-800 px-3 py-2 rounded transition" to="/reports">Reports</Link>
                    </div>
                    <div>
                        <Link
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white transition"
                            to="/logout" > Logout
                        </Link>

                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/salary" element={<Salary />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/edit/:id" element={< EditSalary/>} />
                </Routes>
            </div>
        </Router>
    );
}
