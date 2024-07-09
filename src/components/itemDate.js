import React from "react";
import './itemDate.css'


 const DateCompoent = (props) =>{
    const date = props.date || 'date not sent'
    const month = props.month  ||'month not sent'
    const year = props.year ||'year not sent'
   
    return (
        <div>
            <span className="date"> {date} </span>
            <span className="date"> {month}</span>
            <span className="date"> {year}</span>
           
        </div>
    )
}

export default DateCompoent 
