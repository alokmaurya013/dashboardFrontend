import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClassTimetable = ({url}) => {
  const [timetable, setTimetable] = useState({});
   const token=localStorage.getItem('token');
   const navigate=useNavigate();
  
  useEffect(() => {
    const fetchTimetable=async()=>{
      try{
    const response=await fetch(`${url}/api/display/classTimetable`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'token':`${token}`,
      }
    });
      const data=await response.json();
      setTimetable(data);
  }catch(e){
    alert(e);
    console.log('error',e);
  }
  }
     fetchTimetable();
  }, []);

  const hours = ['10', '11', '12', '13', '14', '15'];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div>
    <section class="py-1 bg-blueGray-50">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
   
     <div class="flex flex-wrap items-center">
          <h3 class="font-semibold text-base m text-blueGray-700">Timetable</h3>
     
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button  onClick={() => navigate(-1)} class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Go back
         </button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center  bg-gray-300  w-full border-collapse ">
        <thead>
          <tr>
            
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Time/day
                        </th>
          {days.map(day=>(<th key={day} class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {day}
                        </th>
          ))}
         
          </tr>
        </thead>

       <tbody>
       {hours.map(hour=>( 
        <tr key={hour}>
            <th class="border-t-3 px-6 align-middle border-l-2 border border-r-2 text-xs whitespace-nowrap p-4 text-left">
              {hour}
            </th>
            {days.map(day=>(
            <td key={day} class="border-t-3 px-6 align-middle border border-solid border-l-3 border-r-3 text-xs  p-4 ">
              {(timetable[day]&&[day][hour]!=='-')?timetable[day][hour]:"-"}
            </td>
            ))}
          </tr>
       ))}
       </tbody>

      </table>
    </div>
  </div>
</div>
</section>
    </div>
  );
};

export default ClassTimetable;
