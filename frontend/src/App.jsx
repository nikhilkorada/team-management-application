import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddMember from './pages/addmember';
import ViewMembers from './pages/viewmember';
import MemberDetails from './pages/memberdetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
