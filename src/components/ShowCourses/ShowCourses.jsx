
import './ShowCourses.css';
import DeleteCourse from '../ModifyCourse/DeleteCourse';
import { useState } from 'react';
const ShowCourses = ({courseList, setCourseList}) => {

    
    // const [courseList, setCourseList] = useState( JSON.parse(localStorage.getItem('courseList')));
    if (courseList=== null) {
        return (
            <div className='course-cart'>
                <p>No course added</p>
            </div>
        )
    }

    

    return (
        <div className='course-cart'>
            
            {
            
            courseList && courseList.map((course) => {
                return (
                    <div key={course.courseCode} className='course'>
                        <p>{course.courseCode}</p>
                        <p className=''>Section: {course.courseDetails.substring(8,10)}</p>
                        <p>Faculty: {course.empShortName}</p>

                        <button className='button-23' onClick={() => DeleteCourse(course.courseDetails, setCourseList)}>Delete Course</button>
                    </div>
                )
            })}
        </div>
    );
};

export default ShowCourses;