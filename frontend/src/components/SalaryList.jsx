import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function List() {

    const [salary, setSalary] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/get')
            .then(result => setSalary(result.data))
            .catch(err => console.error(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/delete/${id}`)
        
            .then(() => {alert('Deleted Successfully');
             setSalary(prevUsers => prevUsers.filter(salary => salary.GlossSalary !== id));
            })
            .catch(err => console.error(err));
    }

    return (
        <div>

            <div className="bg-white border border-gray-300 rounded-md p-6 shadow-md w-[700px] ml-72 mt-12">
                <h2 className="text-lg font-semibold mb-4 text-gray-700 ml-4">Salary Records</h2>
                <table className="min-w-[400px] border border-gray-200 text-sm ml-4">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="border p-2">Gross Salary</th>
                            <th className="border p-2">Total Deduction</th>
                            <th className="border p-2">Net Salary</th>
                            <th className="border p-2">Month</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            salary.map((sal) => {
                                return (
                                    <tr className="text-gray-700">
                                        <td className="border p-2">{sal.GlossSalary}</td>
                                        <td className="border p-2">{sal.TotalDeduction}</td>
                                        <td className="border p-2">{sal.NetSalary}</td>
                                        <td className="border p-2">{sal.Month}</td>
                                        <td className="border p-2 space-x-2">
                                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm">
                                                <Link to={`/edit/${sal.GlossSalary}`}>Edit</Link>
                                            </button>
                                            <button 
                                            onClick={(e) => handleDelete(sal.GlossSalary)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}