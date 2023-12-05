'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAppContext } from '../AppProvider';

export default function AddEventForm() {
  const [dateVenue, setDateVenue] = useState('');
  const [timeVenue, setTimeVenue] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const { addEvent } = useAppContext();
  const router = useRouter();

  return (
    <>
      <form
        className="flex flex-col w-80 mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          const newEvent = {
            timeVenueUTC: timeVenue,
            dateVenue,
            homeTeam: { officialName: homeTeam },
            awayTeam: { officialName: awayTeam },
          };
          addEvent(newEvent);
          router.push(`/events`);
          console.log('newEvent', newEvent);
        }}
      >
        <label className="mb-4 flex">
          <span>Date venue</span>
          <input
            className="ml-6"
            type="date"
            value={dateVenue}
            onChange={(e) => setDateVenue(e.currentTarget.value)}
          />
        </label>
        <label className="mb-4 flex">
          <span>Time venue</span>
          <input
            className="ml-6"
            type="time"
            value={timeVenue}
            onChange={(e) => setTimeVenue(e.currentTarget.value)}
          />
        </label>
        <label className="mb-4 flex">
          <span>Home team</span>
          <input
            className="ml-6"
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.currentTarget.value)}
          />
        </label>
        <label className="mb-4 flex">
          <span>Away team</span>
          <input
            className="ml-6"
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
