import React from "react";

import "./concepts.scss";
import ConceptCard from "./ConceptCard";

// Ma'lumotlar massivi

const Concepts = ({ data }) => {
    return (
        <div className="concepts">
            <div className="concepts__cards">
                {data.map((item) => (
                    <ConceptCard item={item} />
                ))}
            </div>
        </div>
    );
};

export default Concepts;
