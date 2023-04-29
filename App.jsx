import React, { useState } from 'react';
import data from './data';
import PeopleList from './peopleList';

const App = () => {
  const [people, SetPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <PeopleList people={people}/>
        <button className="btn btn-block" onClick={() => SetPeople([]) }>Clear All</button>
      </section>
    </main>
  );
}

export default App;
