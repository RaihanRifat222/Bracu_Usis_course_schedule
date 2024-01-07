
import '../ShowCourses/ShowCourses.css';
import DeleteCourse from '../ModifyCourse/DeleteCourse';
import { useState } from 'react';
const Courses = () => {

    const [courseList, setCourseList] = useState( JSON.parse(localStorage.getItem('courseList'))? JSON.parse(localStorage.getItem('courseList')): []);
    // const [courseList, setCourseList] = useState( JSON.parse(localStorage.getItem('courseList')));
    if (courseList=== null) {
        return (
            <div className='course-cart'>
                <p>No course added</p>
            </div>
        )
    }

    

    return (
        <div className='course-cart m-96'>
            
            {
            
            courseList && courseList.map((course) => {
                return (
                    <div key={course.courseCode} className='course'>
                        <p className='p-3 text-2xl'>{course.courseCode}</p>
                        <p className='p-3 text-xl'>Section: {course.courseDetails.substring(8,10)}</p>
                        <p className='p-3 text-xl'>Faculty: {course.empShortName}</p>

                        <button className='button-23' onClick={() => DeleteCourse(course.courseDetails, setCourseList)}>Delete Course</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Courses;