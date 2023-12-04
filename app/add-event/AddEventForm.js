'use client';

import { useState } from 'react';

export default function AddEventForm() {
  const [dateVenue, setDateVenue] = useState('');
  const [timeVenue, setTimeVenue] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');

  console.log(newEvent);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Date venue
          <input
            type="date"
            value={dateVenue}
            onChange={(e) => setDateVenue(e.currentTarget.value)}
          />
        </label>
        <label>
          Time venue (UTC format)
          <input
            type="time"
            value={timeVenue}
            onChange={(e) => setTimeVenue(e.currentTarget.value)}
          />
        </label>
        <label>
          Home team
          <input
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.currentTarget.value)}
          />
        </label>
        <label>
          Away team
          <input
            type="text"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.currentTarget.value)}
          />
        </label>
        <button>Add event</button>
      </form>
    </>
  );
}
