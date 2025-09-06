import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard'; // ✅ Import Dashboard
import AddSessionForm from './pages/admin/Session';
import AddSubjectForm from './pages/admin/Subject';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
// import ExamineeTable from './pages/admin/Examinee';
import ExaminationForm from './pages/admin/Examination';
import QuestionForm from './pages/admin/Questionbank';
import ReportTable from './pages/admin/ReportGeneration';
import UserProfile from './pages/users/Profile';
import UserDashboard from './pages/users/Userdashboard';
import UserDashboardHome from './pages/users/UserDashboardHome';
// import ResultDeclarationTable from './pages/admin/ResultDecleration';
import ChangePasswordForm from './pages/users/ChangePassword';
import MyExamsTable from './pages/users/MyExams';
// import ChangePassword from './pages/admin/Changepass';
// import ContactUsForm from './pages/users/Contactus';
import ChangePass from './pages/admin/Changepass';
import Examinee from './pages/admin/Examinee';
import ExamResultsDeclaration from './pages/admin/ExamResultDeclaration';
import Msg from './pages/admin/Message';
import GetExam from './pages/users/GetExam';
import Home from './pages/users/Home';
import Message from './pages/users/Message';
import Result from './pages/users/Result';
// import Message from '../../server/models/Message';




function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path='/adlogin' element={<AdminLogin/>}></Route>
        <Route path="/admin" element={<Dashboard />}>
        <Route path='reportgeneration' element={<ReportTable />}></Route>
        <Route path='resultdeclaration' element={<ExamResultsDeclaration/>}></Route>
        <Route path="examination" element={<ExaminationForm/>}></Route>
        <Route path="changepass" element={<ChangePass/>}></Route>
        <Route path='session' element={<AddSessionForm />}></Route>
        <Route path='questionbank' element={<QuestionForm />}></Route>
        <Route path='message' element={<Msg/>}></Route>
        <Route path='subject' element={<AddSubjectForm />}></Route>
        <Route path='examinee' element={<Examinee />}></Route>
        </Route> 
       
        <Route path="/users" element={<UserDashboard/>}>
        <Route index element={<UserDashboardHome/>}></Route>
        <Route path='profile' element={<UserProfile/>}></Route>
        <Route path='myexams' element={<MyExamsTable/>}></Route>
        <Route path='result' element={<Result/>}></Route>
        <Route path='changepassword' element={<ChangePasswordForm/>}></Route>
        <Route path='message' element={<Message/>}></Route>
        <Route path='getexam/:id' element={<GetExam/>}></Route>
        </Route>

        <Route path="/examination" element={<ExaminationForm/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        

        
        
        {/* ✅ Dashboard Route */}

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
