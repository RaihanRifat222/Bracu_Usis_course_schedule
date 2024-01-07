import  { useContext, useEffect, useState } from 'react';
import './FetchSchedule.css';

import { AllCourseContext } from '../../main';
// import AddCourse from '../ModifyCourse/AddCourse';
import ShowCourses from '../ShowCourses/ShowCourses';
import AddCourse from '../ModifyCourse/AddCourse';


const FetchSchedule = () => {
    const sections = useContext(AllCourseContext);


    const [courseList, setCourseList] = useState(JSON.parse(localStorage.getItem('courseList') || '[]'));
    
    const [currentPage, setCurrentPage] = useState(1);
   
    const [sectionsPage, setSectionsPage] = useState([]);
   
 
    useEffect(() => {
        setSectionsPage(sections.slice((currentPage-1)*10, currentPage*10));
        console.log(sectionsPage);
        console.log(currentPage);
        console.log(sections.length);
    },[currentPage, sections])
    
    
   

    return (
            <div className="">

           <div className='flex space-x-32'>
           <table id='section-table'>
            <thead>
            <tr>
                <th>Add</th>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Course Details</th>
                <th>Faculty Name</th>
                <th>Initital</th>
                <th>Available Seat</th>
                <th>totalFillupSeat</th>
                <th>classSchedule</th>
                <th>classLabSchedule</th>

                
            </tr>
            </thead>
            <tbody>
            {
                
                sectionsPage.map(section => 
                    <tr key={section.academicSectionId} className='section'>
                        <td><button onClick={()=> AddCourse(section,courseList, setCourseList)} className='add-section button-23'>Add</button></td>
                        <td>{section.courseCode}</td>
                        <td>{section.courseTitle}</td>
                        <td>{section.courseDetails}</td>
                        <td>{section.empName}</td>
                        <td>{section.empShortName}</td>
                        <td>{section.availableSeat}</td>
                        <td>{section.totalFillupSeat}</td>
                        <td>{section.classSchedule}</td>
                        <td>{section.classLabSchedule}</td>
                    
                        
                    </tr>
                    )
            }
            </tbody>
            
            
        </table>
        
        <ShowCourses courseList={courseList} setCourseList={setCourseList} ></ShowCourses>
          
           </div>

        <div className="change">
            <button className='button-23' onClick={() => setCurrentPage(currentPage-1)}>Previous</button>
            <button className='button-23' onClick={() => setCurrentPage(currentPage+1)}>Next</button>
            </div>
            </div>
        
    );
};


export default FetchSchedule;