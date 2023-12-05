'use client';

import Link from 'next/link';
import { useAppContext } from '../AppProvider';

export default function EventsInformation() {
  const { sportEvents } = useAppContext();
  console.log('sporteeventsss', sportEvents);

  return (
    <div className="flex flex-col items-center mt-8 text-center">
      {sportEvents.map((sportevent) =>
        sportevent.homeTeam && sportevent.awayTeam ? (
          <section
            className="mb-4 border w-72 border-white  rounded px-4 py-4"
            key={`sportevent-div-${sportevent.dateVenue}-${
              sportevent.homeTeam?.slug || 'to-be-confirmed'
            }-vs-${sportevent.awayTeam?.slug || 'to-be-confirmed'}`}
          >
            <Link
              href={`events/${sportevent.homeTeam.slug}-vs-${sportevent.awayTeam.slug}`}
            >
              <div>{sportevent.dateVenue}</div>
              <div>{sportevent.timeVenueUTC}</div>
              <div>{sportevent.homeTeam.officialName}</div>
              <span>vs.</span>
              <div>{sportevent.awayTeam.officialName}</div>
            </Link>
          </section>
        ) : (
          <section
            className="mb-4 border w-72 border-white  rounded px-4 py-4"
            key={`sportevent-div-${
              sportevent.homeTeam ? sportevent.homeTeam.officialName : ''
            }-vs-${
              sportevent.awayTeam ? sportevent.awayTeam.officialName : ''
            }`}
          >
            <Link
              href={`events/${
                sportevent.homeTeam
                  ? sportevent.homeTeam.slug
                  : 'to-be-confirmed'
              }-vs-${
                sportevent.awayTeam
                  ? sportevent.awayTeam.slug
                  : 'to-be-confirmed'
              }`}
            >
              <div>{sportevent.dateVenue}</div>
              {sportevent.homeTeam !== null ? (
                <div>{sportevent.homeTeam.officialName}</div>
              ) : (
                <div>to be confirmed</div>
              )}
              <span>vs.</span>
              {sportevent.awayTeam !== null ? (
                <div>{sportevent.awayTeam.officialName}</div>
              ) : (
                <div>to be confirmed</div>
              )}
            </Link>
          </section>
        ),
      )}
    </div>
  );
}
