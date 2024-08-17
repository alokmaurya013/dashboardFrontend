import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const CreateTimetable=({url})=>{
  const[classname,setClassname]=useState('');
  const[subject,setSubject]=useState('');
  const[day,setDay]=useState('')
  const[startTime,setStartTime]=useState('');
  const[endTime,setEndTime]=useState('');
  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token=localStorage.getItem('token');
      const response = await fetch(`${url}/api/teacher/createtimetable`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token':`${token}`,
        },
        body: JSON.stringify({
          classname,
          subject,
          day,
          startTime,
          endTime,
  
        }),
      });
      const data = await response.json();
      if (data.message) {        
        alert(data.message);
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login. Please try again.');
    }
     setClassname('');
     setSubject('');
     setDay('');
     setStartTime('');
     setEndTime('');
     
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
      />
    </div>
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Timetable For Class</h3>
      <hr className='my-2'/>
      <button onClick={() => navigate(-1)} className="text-blue-500 max-w-2xl hover:text-blue-700">
      Go Back
    </button>
    </div>
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="sm:col-span-2">
          <label htmlFor="classname" className="block text-sm font-semibold leading-6 text-gray-900">
            Class Name
          </label>
          <div className="mt-2.5">
            <input
              id="classname"
              name="classname"
              type="text"
              value={classname}
              onChange={(e)=>setClassname(e.target.value)}
              autoComplete="classname"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
           Subject Name
          </label>
          <div className="mt-2.5">
            <input
              id="subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              autoComplete="subject"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
        </div>
       </div>
       <div className="sm:col-span-2">
          <label htmlFor="day" className="block text-sm font-semibold leading-6 text-gray-900">
            Day
          </label>
          <div className="mt-2.5">
            <input
              id="day"
              name="day"
              type="text"
              value={day}
              onChange={(e)=>setDay(e.target.value)}
              autoComplete="day"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="starttime" className="block text-sm font-semibold leading-6 text-gray-900">
            Start Time
          </label>
          <div className="mt-2.5">
            <input
              id="starttime"
              name="starttime"
              type="text"
              value={startTime}
              onChange={(e)=>setStartTime(e.target.value)}
              autoComplete="starttime"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="endtime" className="block text-sm font-semibold leading-6 text-gray-900">
            End Time
          </label>
          <div className="mt-2.5">
            <input
              id="endtime"
              name="endtime"
              type="text"
              value={endTime}
              onChange={(e)=>setEndTime(e.target.value)}
              autoComplete="endtime"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          create Timetable
        </button>
      </div>
    </form>
  </div>
  )
}
export default CreateTimetable;