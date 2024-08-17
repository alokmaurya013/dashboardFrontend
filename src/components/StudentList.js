import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const StudentList = ({url}) => {
    const [students, setStudents] = useState([]);
    const [editFormData, setEditFormData] = useState({ name: '', email: '' });
    const [editingStudent, setEditingStudent] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${url}/api/display/students`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${token}`,
                    },
                });
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                alert(error)
                console.error('Error fetching student List:', error);
            }
        };
        fetchStudents();
    }, []);


    const handleEditFormChange = (e) => {
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditClick = (student) => {
        setEditingStudent(student._id); 
        setEditFormData({ name: student.name, email: student.email });

    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${url}/api/edit/editDetail/${editingStudent}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${token}`,
                },
                body: JSON.stringify(editFormData),
            });
            const updatedStudent = await response.json();
    
            setStudents(
                students.map((student) =>
                    student._id === editingStudent ? updatedStudent : student
                )
            );
            console.log('HES');
            setEditingStudent(null);
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };
    useEffect(() => {
        if (editingStudent) {
            console.log("Editing student ID:", editingStudent);
        }
    }, [editingStudent]);

    const handleDelete = async (studentId) => {
        try {
            const token = localStorage.getItem('token');
            await fetch(`${url}/api/edit/delete/${studentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${token}`,
                },
            });
            setStudents(students.filter((student) => student._id !== studentId));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    }

    return (
        <div className="container">
            <section className="py-1 bg-blueGray-50">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <h3 className="font-semibold text-center text-blueGray-700">Students List</h3>
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full  max-w-full flex-grow flex-1">
                                    <button onClick={() => navigate(-1)} className="text-blue-500  hover:text-blue-700">
                                        Go Back
                                    </button>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                        Add Student</button>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Email
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Edit
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {Array.isArray(students) && students.map((student) => {
                                        return <tr key={student._id}>
                                            <th className="border-t-0 px-6 align-middle border border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                {student.name}
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {student.email}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEditClick(student)}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(student._id)}>
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {editingStudent && (
                <div id="authentication-modal" tabIndex="-1" aria-hidden="false" className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-75">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit details
                                </h3>
                                <button type="button" onClick={() => setEditingStudent(null)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form onSubmit={handleEditSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text"
                                            name="name"
                                            id="name"
                                            value={editFormData.name}
                                            onChange={handleEditFormChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email"
                                            id="email"
                                            value={editFormData.email}
                                            onChange={handleEditFormChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <button type="button"
                                        onClick={() => setEditingStudent(null)}
                                        className="w-4/10 m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Cancle
                                    </button>
                                    <button type="submit"

                                        className="w-4/10 m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Save 
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            )
            }
        </div>
    );
};
export default StudentList;