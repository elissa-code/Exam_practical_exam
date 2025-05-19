import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Salary() {

    const [gols, setGloss] = useState()
    const [totald, setDeduction] = useState()
    const [net, setNetSal] = useState()
    const [moth, setMonth] = useState()

    const navigate = useNavigate()

    const handleInsert = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/insert", { gols, totald, net, moth })
            .then(() => {
                alert("Salary saved successfully!");
                navigate('/list')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white border border-gray-300 rounded-md p-8 shadow-lg w-[400px]">
                <form onSubmit={handleInsert}>
                    <h2 className="text-xl font-semibold mb-6 text-gray-700 text-center">Add Salary</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Gross Salary</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setGloss(e.target.value)} 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Total Deduction</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setDeduction(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Net Salary</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setNetSal(e.target.value)} 
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Month</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setMonth(e.target.value)} 
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
