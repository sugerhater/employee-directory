import React from "react";

function ResultList(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th>Profile</th>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {props.results.map(person =>(
        <tr>
          <th><img src= {person.picture.medium}></img> </th>
          <th> {person.name.last}</th>
          <th> {person.name.first}</th>
          <th> {person.gender}</th>
          <th> {person.email}</th>
          <th> {person.cell}</th>
        </tr>
      ))}

    </table>


    // <ul className="list-group">
    //   {props.results.map(person => (

    //   <p>
    //       {person.gender}
    //   </p>
    //     // <li className="list-group-item" key={result.results.id.value}>
    //     //   <img alt={result.results.name.last} className="img-fluid" src={result.results.picture.large} />
    //     // </li>
    //   ))}
    // </ul>
  );
}

export default ResultList;
