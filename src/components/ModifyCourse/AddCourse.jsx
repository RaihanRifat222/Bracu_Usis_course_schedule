const AddCourse = (section, courseList, setCourseList) => {

    let newCourseList;
    if (courseList === null) {  
        setCourseList( [section])
        console.log(courseList);
        
    } else {
      
        newCourseList = [...courseList]
        if (newCourseList.length === 5){
            alert('You can add maximum 5 courses');
            return;
        }
        else{
            for (let i = 0; i < newCourseList.length; i++) {
                
                if (newCourseList[i].courseCode === section.courseCode) {
                    const removePreviousSection = window.confirm('This course is already added. Do you want to remove the previous section?');
                    if (removePreviousSection) {
                        newCourseList.splice(i, 1);
                       
                    }
                    else{
                        return;
                    }
                    
                }
            }
            newCourseList.push(section);
        }
    setCourseList(newCourseList);
    }
    console.log(courseList);
    localStorage.setItem('courseList', JSON.stringify(newCourseList));
    
};

export default AddCourse;