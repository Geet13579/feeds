import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
import Home from './Components/MainView';
import DetailFeedback from './Components/DetailsFeedback';
import AddFeedback from './Components/AddFeedback';
import EditFeedback from './Components/EditFeedback';
import RoadMap from './Components/RoadMap';




// import FormPage from './components/form';
// import TablePage from './components/tablePage';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/detailfeedback" element={<DetailFeedback />} />
        <Route path="/addfeedback" element={<AddFeedback />} />
        <Route path="/editFeedback" element={<EditFeedback />} />
        <Route path="/roadmap" element={<RoadMap />} />




        {/* <Route path="/form" element={<FormPage />} />
        <Route path="/table" element={<TablePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
