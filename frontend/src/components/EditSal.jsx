import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function EditSalary() {

    const { id } = useParams()
    const [gols, setGloss] = useState()
    const [totald, setDeduction] = useState()
    const [net, setNetSal] = useState()
    const [moth, setMonth] = useState()

    const navigate =  useNavigate()


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/put/${id}`, { gols, totald, net, moth })
            .then(() => {
                alert("Salary Updated successfully!");
                navigate('/list')
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        axios.get(`http://localhost:4000/get/${id}`)
            .then(result => {
                setGloss(result.data.GlossSalary)
                setDeduction(result.data.TotalDeduction)
                setNetSal(result.data.NetSalary)
                setMonth(result.data.Month)
            })
            .catch(err => console.error(err));
    }, [id])


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white border border-gray-300 rounded-md p-8 shadow-lg w-[400px]">
                <form onSubmit={handleUpdate}>
                    <h2 className="text-xl font-semibold mb-6 text-gray-700 text-center">Edit Salary</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Gross Salary</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={gols}
                            onChange={(e) => setGloss(e.target.value)} 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Total Deduction</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setDeduction(e.target.value)}
                            value={totald}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Net Salary</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            onChange={(e) => setNetSal(e.target.value)} 
                            value={net}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-1">Month</label>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 w-full"
                            value={moth}
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
