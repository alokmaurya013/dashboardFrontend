import React from 'react'
import { Link } from 'react-router-dom';

const TeacherDashboard=()=>{
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Teacher Dashboard</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          You can register student ,create timetable or view student
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
          pulvinar et feugiat blandit at. In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
    
            <Link className="relative pl-16" to="/createStudent">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <p>icon</p>
                </div>
                Click here to create account for student.
              </dt>
              {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd>
           */}
            </Link> 
            <Link className="relative pl-16" to="/createTimetable">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <p>icon</p>
                </div>
                Click here to create timetable for class.
              </dt>
              {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd>
            */}
            </Link>
           
            <Link className="relative pl-16" to="/studentofclass">
              <dt className="text-base font-semibold leading-7 text-gray-900" to='/student'>
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <p>icon</p>
                </div>
                Click here to view students list of your class.
              </dt>
              {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd> */}
            
            </Link>
        </dl>
      </div>
    </div>
  </div>
  )
}
export default TeacherDashboard;
