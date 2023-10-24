import React from "react";
import './Dots.scss'

const Dots = ({ choosedPage, handlePageClick }) => {
    console.log(choosedPage)
    return (
        
        <div className="dots">
            <ul className="dots__list">
            {[0, 1, 2].map((item) => (
                <li key={item}>
                <button
                    className={`dots__item ${item === choosedPage ? 'active' : ''}`}
                    onClick={() => handlePageClick(item)}
                ></button>
                </li>
            ))}
            </ul>
        </div>   
    )
    
}

export default Dots;