import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      <p>
        something
      </p>
      {/* {props.results.map(result => (
        <li className="list-group-item" key={result.results.id.value}>
          <img alt={result.results.name.last} className="img-fluid" src={result.results.picture.large} />
        </li>
      ))} */}
    </ul>
  );
}

export default ResultList;
