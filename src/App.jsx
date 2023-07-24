import './App.css'
// import Fetching from './Components/EkOrFolder/Fetching';
import Navbar from './Components/Navbar/Navbar';
import MainNews from './Components/NewsPage/MainNews';

function App() {

  return (
    <>
      <div className='App'>
        <Navbar/>
        <MainNews/>
        {/* <Fetching/> */}
      </div>
    </>
  )
};
export default App;
