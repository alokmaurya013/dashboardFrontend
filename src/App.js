import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PrincipalDashboard from "./components/PrincipalDashboard.js";
import TeacherDashboard from "./components/TeacherDashboard.js";
import StudentDashboard from './components/StudentDashboard.js';
import CreateTeacherAccount from './components/CreateTeacherAccount.js';
import CreateStudent from './components/CreateStudent.js';
import CreateClassroom from './components/CreateClassroom.js';
import AssignStudent from './components/AssignStudent.js';
import TeacherList from './components/TeacherList.js';
import StudentList from './components/StudentList.js';
import CreateTimetable from './components/CreateTimetable.js';
import ClassTimetable from './components/ClassTimetable.js'
import Signin from './components/Signin.js';
import Forget from './components/Forget.js';
import StudentofClass from './components/StudentofClass.js';
import ViewTimetable from './components/ViewTimetable.js';
import Home from './components/Home.js';

function App() {
  const url='https://dashboardbackend-vu2b.onrender.com';
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter >
    <Header/>
    <div className='flex-grow'>
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path="/principalDashboard" element={<PrincipalDashboard/>}/>
        <Route path="/teacherDashboard" element={<TeacherDashboard/>}/>
        <Route path="/studentDashboard" element={<StudentDashboard/>}/>
        <Route path='/createTeacher'  element={<CreateTeacherAccount url={url} />}/>
        <Route path='/createStudent'  element={<CreateStudent url={url} />}/>
        <Route path='/createClassroom' element={<CreateClassroom url={url} />}/>
        <Route path='/assignStudent' element={<AssignStudent url={url} />}/>
        <Route path='/teacherList' element={<TeacherList url={url} />}/>
        <Route path='/studentList' element={<StudentList url={url} />}/>
        <Route path='/createTimetable' element={<CreateTimetable url={url} />}/>
        <Route path='/viewtimetable' element={<ViewTimetable url={url} />}/>
        <Route path='/classtimetable' element={<ClassTimetable url={url} />}/>
        <Route path='/signin' element={<Signin url={url}/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='/studentofclass' element={<StudentofClass url={url}/>}/>
       </Routes>
       </div>
       <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;

