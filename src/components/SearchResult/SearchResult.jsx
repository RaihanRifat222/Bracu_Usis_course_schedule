import { useContext, useState } from 'react';
import './SearchResult.css';
import { AllCourseContext } from '../../main';
import AddCourse from '../ModifyCourse/AddCourse';
import Search from '../ModifyCourse/SearchCourse';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const location = useLocation();
    const searchText = location.state.searchText;
    const [courseList, setCourseList] = useState(JSON.parse(localStorage.getItem('courseList') || '[]'));
    const sections = useContext(AllCourseContext);
   
    let filteredList= Search(searchText,sections);
  
        return (
        <>

        <h1 className='font-semibold text-4xl mx-28'>Showing Search Results for {searchText}</h1>
        <table id='search-table'>
        <thead>
            <tr>
                <th>Add</th>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Course Details</th>
                <th>Faculty Name</th>
                <th>Initital</th>
                <th>Available Seat</th>
                <th>Seat Booked</th>
                <th>classSchedule</th>
                <th>classLabSchedule</th>
                
                <th>courseCredit</th>
                
            </tr>
            </thead>
            <tbody>
            {
                
                filteredList.map(section => 
                    <tr key={section.id} className='section'>
                        <td><button onClick={() => AddCourse(section,courseList, setCourseList)} className='add-section button-23'>Add</button></td>
                        <td>{section.courseCode}</td>
                        <td>{section.courseTitle}</td>
                        <td>{section.courseDetails}</td>
                        <td>{section.empName}</td>
                        <td>{section.empShortName}</td>
                        <td>{section.availableSeat}</td>
                        <td>{section.totalFillupSeat}</td>
                        <td>{section.classSchedule}</td>
                        <td>{section.classLabSchedule}</td>
                    
                        <td>{section.courseCredit}</td>
                    </tr>
                    )
            }
            </tbody>
            
        </table>
        </>
    );
};

export default SearchResult;