import { useState } from "react";
import Attendance from "./attendance";
import Calendar from "./calendar";

const MainContent = () => {

    const [currentDate, setCurrentDate] = useState('')


    return (
        <div className="main_content_box">
            <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate}/>
        </div>
    )

}

export default MainContent;