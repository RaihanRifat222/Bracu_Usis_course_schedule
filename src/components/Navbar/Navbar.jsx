
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const handleSearch = () => {
        const searchText = document.querySelector('.search-form').value;
        navigate('/search', { state: { searchText } });
    }
    return (
        <div>
        <nav>
        
        <div className="navbar-container">
            <div className="logo">Brac University Courses</div>
            <div className="search-bar">
                <input className='search-form' type="text" placeholder="Course Code / Faculty Initial..." />
                <div className="search-field">
                <button className='nav-btn' onClick={handleSearch}>Search</button>
                <Link to='/' className='nav-btn'>Clear</Link>
                </div>
                
                
            </div>
            <ul className="nav-links">
                <Link className='nav-btn' id='home' to='/'>Home</Link>
                <Link className='nav-btn' id='show-routine' to='/routine'>Show Routine</Link>
                
                <Link to='/courses'  className="nav-btn" id='added-courses'>Added Courses</Link>
            </ul>
        </div>
    </nav>

   
    </div>
    );
};

export default Navbar;