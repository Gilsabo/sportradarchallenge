'use client';

import Link from 'next/link';
import { useAppContext } from '../AppProvider';

export default function EventsInformation() {
  const { sportEvents } = useAppContext();
  console.log('sporteeventsss', sportEvents);

  return (
    <div className="flex flex-col items-center mt-8 text-center md:flex-row md:flex-wrap md:justify-center lg:flex-row lg:flex-wrap">
      {sportEvents.map((sportevent) =>
        sportevent.homeTeam && sportevent.awayTeam ? (
          <section
            className="relative mb-4 border w-96 border-white rounded px-4 py-4 md:mx-4 md:w-80 lg:w-72 lg:mx-8 lg:my-4"
            key={`sportevent-div-${sportevent.dateVenue}-${
              sportevent.homeTeam?.slug || 'to-be-confirmed'
            }-vs-${sportevent.awayTeam?.slug || 'to-be-confirmed'}`}
          >
            <Link
              href={`events/${sportevent.homeTeam.slug}-vs-${sportevent.awayTeam.slug}`}
            >
              <div className="absolute top-2 text-xs">
                {sportevent.dateVenue}
              </div>
              <div className="absolute top-2 right-2 text-xs">
                {sportevent.timeVenueUTC}
              </div>
              <div className="mt-4">{sportevent.homeTeam.officialName}</div>
              <span>vs.</span>
              <div>{sportevent.awayTeam.officialName}</div>
            </Link>
          </section>
        ) : (
          <section
            className="relative mb-4 border w-96 border-white rounded px-4 py-4 md:mx-4 md:w-80 lg:w-72 lg:mx-8 lg:my-4"
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
              <div className="absolute top-2 text-xs">
                {sportevent.dateVenue}
              </div>
              <div className="absolute top-2 right-2 text-xs">
                {sportevent?.timeVenueUTC || 'tbc'}
              </div>
              {sportevent.homeTeam !== null ? (
                <div>{sportevent.homeTeam.officialName}</div>
              ) : (
                <div className="mt-4">to be confirmed</div>
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
