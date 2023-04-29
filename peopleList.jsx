import Person from "./person";
import React from "react";

const PeopleList = ({ people }) => {
  return (
  <section>
    {people.map((person) => {
      return  <Person key={person.id} {...person}/>
})}
    </section> 
  );
};

export default PeopleList;