import  { useContext, useEffect, useState } from 'react';
import './FetchSchedule.css';

import { AllCourseContext } from '../../main';
// import AddCourse from '../ModifyCourse/AddCourse';
import ShowCourses from '../ShowCourses/ShowCourses';
import AddCourse from '../ModifyCourse/AddCourse';


const FetchSchedule = () => {
    const sections = useContext(AllCourseContext);


    const [courseList, setCourseList] = useState(JSON.parse(localStorage.getItem('courseList') || '[]'));
    

    
// const AddCourse = (section, setCourseList) => {

 
//     if (courseList === null) {  
//         setCourseList( [section])
        
//     } else {
      
//         let newCourseList = [...courseList];
//         if (newCourseList.length === 5){
//             alert('You can add maximum 5 courses');
//             return;
//         }
//         else{
//             for (let i = 0; i < newCourseList.length; i++) {
                
//                 if (newCourseList[i].courseCode === section.courseCode) {
//                     const removePreviousSection = window.confirm('This course is already added. Do you want to remove the previous section?');
//                     if (removePreviousSection) {
//                         newCourseList.splice(i, 1);
                       
//                     }
//                     else{
//                         return;
//                     }
                    
//                 }
//             }
//             newCourseList.push(section);
//         }
//     setCourseList(newCourseList);
//     }

//     localStorage.setItem('courseList', JSON.stringify(courseList));
    
// };

    return (
            <div className="flex space-x-32">

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
                
                sections.map(section => 
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
        
    );
};


export default FetchSchedule;