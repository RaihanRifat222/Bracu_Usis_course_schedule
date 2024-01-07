
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Header;