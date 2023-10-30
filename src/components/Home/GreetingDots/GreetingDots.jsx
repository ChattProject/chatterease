import React from "react";

export const GreetingDots = ({ choosedPage, handlePageClick }) => {
  return (
    <div className="dots">
      <ul className="dots__list">
        {[0, 1, 2].map((item) => (
          <li key={item}>
            <button
              className={`dots__item ${item <= choosedPage ? 'active' : ''}`}
              onClick={() => handlePageClick(item)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};