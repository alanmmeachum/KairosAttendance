import Calendar from "react-calendar";

const Attendance = () => {


    return (
        <div className="attendance_box">
            <h2>Attendance</h2>
            <div className="attendance_header">
                <label htmlFor="grade_level" className="bold">Grade: </label>
                <select name="grade_level" id="grade_level">
                    <option value="K">K</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="5th">5th</option>
                    <option value="6th">6th</option>
                    <option value="7th">7th</option>
                    <option value="8th">8th</option>
                </select>
                <input type="text" className="attendance_search_bar" placeholder="Search.." />
                <button className="attendance_search">Search</button>    
            </div>
            <div className="attendance_body" >
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>
                <p>Dwight K Schrute: <button className="present_button">Present</button>   <button className="absent_button">Absent</button></p>

            </div>
        </div>
    )
}

export default Attendance;