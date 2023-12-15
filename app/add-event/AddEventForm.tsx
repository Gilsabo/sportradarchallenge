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

        }}
      >
        <label className="mb-4 flex">
          <span className="w-24">Date venue</span>
          <input
            className="rounded-sm text-blue-900"
            type="date"
            value={dateVenue}
            onChange={(e) => setDateVenue(e.currentTarget.value)}
            required
          />
        </label>
        <label className="mb-4 flex">
          <span className="w-24">Time venue</span>
          <input
            className="rounded-sm text-blue-900"
            type="time"
            value={timeVenue}
            onChange={(e) => setTimeVenue(e.currentTarget.value + ':00')}
            required
          />
        </label>
        <label className="mb-4 flex">
          <span className="w-24">Home team</span>
          <input
            className="rounded-sm text-blue-900"
            type="text"
            value={homeTeam}
            onChange={(e) => setHomeTeam(e.currentTarget.value)}
            required
          />
        </label>
        <label className="mb-4 flex">
          <span className="w-24">Away team</span>
          <input
            className="rounded-sm text-blue-900"
            type="text"
            value={awayTeam}
            onChange={(e) => setAwayTeam(e.currentTarget.value)}
            required
          />
        </label>
        <button className="border rounded-sm border-white py-1 hover:border-red-500 hover:text-red-500">
          Add event
        </button>
      </form>
    </>
  );
}
