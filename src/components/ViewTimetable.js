import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewTimetable = ({url}) => {
  const [timetables, setTimetables] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const response = await fetch(`${url}/api/display/viewTimetable`, {
          method:"GET",
          headers: {
            'Content-Type': 'application/json',
            'token': `${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setTimetables(data);
      } catch (error) {
        console.error('Error fetching timetable:', error);
      }
    };
    fetchTimetables();
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

    {timetables.map((classroom,index)=>(
      <div key={index} className="block w-full overflow-x-auto">
      <hr/>
    <h1 className="text-lg fond-bold capitalize py-2">{classroom.classroom}</h1>
      <table class="items-center  bg-gray-300  w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                           Time/day
                        </th>
          {hours.map(hour=>(<th key={hour} class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          {hour}
                        </th>
          ))}
         
          </tr>
        </thead>

       <tbody>
       {days.map(day=>( 
        <tr key={day}>
            <th className="border-t-3 px-6 align-middle border-l-2 border border-r-2 text-xs whitespace-nowrap p-4 text-left">
              {day}
            </th>
            {hours.map((hour)=>{
              const entry=classroom.timetable.find((t)=>t.day===day&&t.startTime===hour);
            return (<td key={hour} className="border-t-3 px-6 align-middle border border-solid border-l-3 border-r-3 text-xs  p-4 ">
              {entry?entry.subject:'-'}
            </td>);
            })}
          </tr>
       ))}
       </tbody>

      </table>
    </div>
    ))}
  </div>
</div>
</section>
    </div>
  );
};

export default ViewTimetable;
