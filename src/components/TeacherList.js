import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherList = ({url}) => {
  const [teachers, setTeachers] = useState([]);
  const navigate=useNavigate();
  const [editFormData, setEditFormData] = useState({ name: '', email: '' });
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${url}/api/display/teachers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': `${token}`, 
          },
        });
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
    fetchTeachers();
  }, []);
  const handleEditFormChange = (e) => {
    setEditFormData({
        ...editFormData,
        [e.target.name]: e.target.value,
    });
    console.log('HEFC');
};

const handleEditClick = (teacher) => {
    setEditingTeacher(teacher._id); 
    setEditFormData({ name: teacher.name, email: teacher.email }); 
};
const handleEditSubmit = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  try {
      const response = await fetch(`${url}/api/edit/editDetail/${editingTeacher}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              'token': `${token}`,
          },
          body: JSON.stringify(editFormData),
      });
      const updatedTeacher = await response.json();
      
      setTeachers(
          teachers.map((teacher) =>
              teacher._id === editingTeacher ? updatedTeacher : teacher
          )
      );
      setEditingTeacher(null);
  } catch (error) {
      console.error('Error updating student:', error);
  }
};

const handleDelete = async (teacherId) => {
  try {
      const token = localStorage.getItem('token');
      await fetch(`${url}/api/edit/delete/${teacherId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'token': `${token}`,
          },
      });
      setTeachers(teachers.filter((teacher) => teacher._id !== teacherId));
  } catch (error) {
      console.error('Error deleting student:', error);
  }
}

  return (
    <div className="container">
       <section class="py-1 bg-blueGray-50">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
    <h3 class="font-semibold text-center text-blueGray-700">Teachers List</h3>
      <div class="flex flex-wrap items-center">
        <div class="relative w-full  max-w-full flex-grow flex-1">
        <button onClick={() => navigate(-1)} className="text-blue-500  hover:text-blue-700">
      Go Back
    </button>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
         Add Teacher</button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Name
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Email
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Edit
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Delete
                        </th>
          </tr>
        </thead>

        <tbody>
         
         {Array.isArray(teachers)&&teachers.map((teacher)=>{ 
         return <tr key={teacher._id}>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              {teacher.name}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {teacher.email}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" onClick={()=>handleEditClick(teacher)}>
              Edit
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" onClick={()=>handleDelete(teacher._id)}>
              <i class="fa fa-trash text-red-500 mr-4" aria-hidden="true"></i>
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
     {editingTeacher && (
                <div id="authentication-modal" tabIndex="-1" aria-hidden="false" className="fixed inset-0 z-50 flex justify-center items-center bg-gray-500 bg-opacity-75">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit details
                                </h3>
                                <button type="button" onClick={() => setEditingTeacher(null)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
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
                                        onClick={() => setEditingTeacher(null)}
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

export default TeacherList;
