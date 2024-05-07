import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Attendance from './attendance';
import { useState } from 'react';


const NewCalendar = (props) => {
    const [showAttendance, setShowAttendance] = useState(false)

    const {currentDate, setCurrentDate} = props

    const handleDayClick = (day) => {
        setCurrentDate(day)
        if (day.getDay() === 1 || day.getDay() === 2 || day.getDay() === 3 || day.getDay() === 4) {
            setShowAttendance(true)
        } else {
            setShowAttendance(false)
        }
    }



    return (
        <div className='calendar_box'>
            <Calendar onClickDay={handleDayClick}/>
            {showAttendance && <Attendance/>}
        </div>
    );
}

export default NewCalendar;