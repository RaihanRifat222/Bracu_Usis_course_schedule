

const DeleteCourse = (courseDetails, setCourseList) => {
    const courseList = JSON.parse(localStorage.getItem('courseList'));
    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].courseDetails === courseDetails) {
            courseList.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('courseList', JSON.stringify(courseList));
    setCourseList(courseList);
    // window.location.reload();
    return (
        <div>
           
        </div>
    );
};

export default DeleteCourse;