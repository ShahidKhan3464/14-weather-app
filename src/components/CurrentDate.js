import React, { useState } from 'react'

const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CurrentDate = () => {
    const [day] = useState(weekDay[new Date().getDay()])
    const [date] = useState(new Date().getDate())
    const [month] = useState(months[new Date().getMonth()])

    return (
        <div className="top_layer">
            <p>{day}</p>
            <p>{date} {month}</p>
        </div>
    )
}

export default CurrentDate