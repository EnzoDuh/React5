import React from "react";

const Quotes = ({ quote }) => {
    return (
        <div className="Quotes">
            <h1>{quote.character}</h1>
            <img src={quote.image} alt="character" />
            <p>{quote.quote}</p>
        </div>
    );
};
export default Quotes;
