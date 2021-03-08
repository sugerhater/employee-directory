import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(person => (

      <p>
          {person.gender}
      </p>
        // <li className="list-group-item" key={result.results.id.value}>
        //   <img alt={result.results.name.last} className="img-fluid" src={result.results.picture.large} />
        // </li>
      ))}
    </ul>
  );
}

export default ResultList;
