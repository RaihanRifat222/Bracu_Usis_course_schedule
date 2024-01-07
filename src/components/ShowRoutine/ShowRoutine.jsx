
import './ShowRoutine.css';

const ShowRoutine = () => {
    let courseList = JSON.parse(localStorage.getItem('courseList'));
    courseList = courseList ? courseList : [];

    let routine = {};
    for (let i = 0; i < courseList.length; i++) {
        let classSchedule = courseList[i].classLabSchedule;
        classSchedule = classSchedule.split(',');
        for (let j = 0; j < classSchedule.length; j++) {
            classSchedule[j] = classSchedule[j].split('(');
            classSchedule[j][0] = classSchedule[j][0].trim();
            let time = classSchedule[j][1].slice(0,17);
            let room = classSchedule[j][1].slice(18, classSchedule[j][1].length-1);
            classSchedule[j][1] = time;
            classSchedule[j][2] = room;
          
        }
        routine[courseList[i].courseDetails] = classSchedule;
    }

    let routine2 = {};
    for (const course in routine) {
        let classSchedule = routine[course];
        for (const classes in classSchedule) {
            let day =  classSchedule[classes][0];
            let time = classSchedule[classes][1];
            let room = classSchedule[classes][2];
            let key = day + ' ' + time;
            if (routine2[key] === undefined) {
                routine2[key] = [course+ '\n Room: ' + room];
            }
            else {
                routine2[key].push(course+ '\n Room: ' + room);
                
            }
        }
    }

    const getColumnClassName = (columnIndex) => {
        const columnClassNames = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        return columnClassNames[columnIndex];
    };

    const timeFrames = ['08:00 AM-09:20 AM', '09:30 AM-10:50 AM', '11:00 AM-12:20 PM', '12:30 PM-01:50 PM', '02:00 PM-03:20 PM', '03:30 PM-04:50 PM', '05:00 PM-06:20 PM'];
  
    const numbs = [0,1,2,3,4,5,6]
    return (
        <div>
            <table className='routine'>
                <tr>
                    <th >Time</th>
                    {
                        numbs.map( numb => {
                            return(
                                <th key={numb} className={getColumnClassName(numb)}>{getColumnClassName(numb)}</th>
                            )
                        }
                        )
                    }
                    

                </tr>
                {
                    
                    timeFrames.map(timeFrame => {
                        
                        return (

                            
                            <tr key={timeFrame}>
                                <td>{timeFrame}</td>
                                {
                                    numbs.map(numb => {
                                        return (
                                            <td key={numb} className={routine2[getColumnClassName(numb) + ' ' + timeFrame] && routine2[getColumnClassName(numb) + ' ' + timeFrame].length > 1 ? getColumnClassName(numb) + ' ' + timeFrame + ' red' : getColumnClassName(numb) + ' ' + timeFrame}>
                                            {
                                                routine2[getColumnClassName(numb) + ' ' + timeFrame] !== undefined && routine2[getColumnClassName(numb) + ' ' + timeFrame].map(course => <p key={course}>{course}</p>) 
                                            }
                                        </td>
                                        )
                                    })
                                }


                            </tr>
                        )
                    }
                    )
                }
                
            </table>
        </div>
    );
};

export default ShowRoutine;