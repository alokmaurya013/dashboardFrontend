 import { Link } from 'react-router-dom';

  const PrincipalDashboard=()=>{
      return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Your school</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                You can register teacher and student or create class.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You can register,update and delete the students or teachers.You can create class and asssign the teacher to it .
                you can see the list of student and teacher.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  <Link className="relative pl-16" to="/createTeacher">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <p>icon</p>
                      </div>
                      Click here to create account for teacher.
                    </dt>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">er and student of your school</dd>
                 */} 
                 </Link> 
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
                  <Link className="relative pl-16" to="/createClassroom">
                    <dt className="text-base font-semibold leading-7 text-gray-900" >
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <p>icon</p>
                      </div>
                      Click here to create classroom and assign teacher to those classroom.
                    </dt>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd>
                  */}
                  </Link>
                  <Link className="relative pl-16" to="/assignStudent">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <p>icon</p>
                      </div>
                      Assign students to teachers.
                    </dt>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd>
                  */}
                  </Link>
                  <Link className="relative pl-16" to="/teacherList">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <p>icon</p>
                      </div>
                      Click here to view teachers list.
                    </dt>
                    
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd> */}
                  
                  </Link>
                  <Link className="relative pl-16" to="/studentList">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <p>icon</p>
                      </div>
                      Click here to view student list.
                    </dt>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd> */}
                  
                  </Link>
                  <Link className="relative pl-16" to="/viewtimetable">
                    <dt className="text-base font-semibold leading-7 text-gray-900" >
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <p>icon</p>
                      </div>
                      Click here to view Timetable list.
                    </dt>
                    {/* <dd className="mt-2 text-base leading-7 text-gray-600">you can create the account for teacher and student of your school</dd> */}
                  
                  </Link>
              </dl>
            </div>
          </div>
        </div>
      )
    }
export default PrincipalDashboard;