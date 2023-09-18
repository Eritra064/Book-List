import React from "react";
import '../stylesheets/Book.css'

const Book = (props) =>{
    return(
        <div className="Book">
            <h3 onClick={props.change}>Books: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName}></input>
        </div>
    );
}
export default Book;
