const Header = () => {


    return (
        <div className="header">
            <h1>Kairos Attendance</h1>
            <ul className="header_list">
                <li><button className="header_button">View Attendance</button></li>
                <li><button className="header_button">Export</button></li>
                <li><button className="header_button">Sign Out</button></li>
            </ul>
        </div>
    )
}

export default Header