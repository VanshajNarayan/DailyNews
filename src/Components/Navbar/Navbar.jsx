import { useDispatch } from '../CustomHook/CustomHook';
import './Navbar.css';

function Navbar() {

  const dispatch = useDispatch();

  const handleCategory = (e) => {
    dispatch({ type: 'STORE', liText : e.target.textContent });
  };

  return (
    <>
      <div className='Navbar'>
        <div><h1 className='tittleNavbar'>News</h1></div>
        <div className="nav_items">
          <ul onClick={handleCategory}>
            <li>Business</li>
            <li>Entertainment</li>
            <li>General</li>
            <li>Health</li>
            <li>Science</li>
            <li>Sports</li>
            <li>Technology</li>
          </ul>
        </div>
      </div>
    </>
  )
};

export default Navbar;