'use client';
import Link from 'next/link';
import { useAppContext } from '../AppProvider';

export default function EventsInformation() {
  const { sportEvents } = useAppContext();

  const daysOfDecemberWithEvents = () => {
    const dateVenueWithEvents = [];

    for (let i = 1; i <= 31; i++) {
      // Change date format dynamically to match sportEvents date format
      const dayNumber = i < 10 ? `0${i}` : `${i}`;
      const dateVenue = `2023-12-${dayNumber}`;

      // Check if any event matches the current dateVenue
      const matchingEvent = sportEvents.find(
        (sportEvent) => sportEvent.dateVenue === dateVenue,
      );
      if (matchingEvent) {
        dateVenueWithEvents.push({
          dateVenue: dateVenue,
          timeVenueUTC: matchingEvent.timeVenueUTC,
          homeTeam: matchingEvent.homeTeam?.officialName,
          homeTeamSlug: matchingEvent.homeTeam?.slug,
          awayTeam: matchingEvent.awayTeam?.officialName,
          awayTeamSlug: matchingEvent.awayTeam?.slug,
        });
      } else {
        dateVenueWithEvents.push({ dateVenue: dateVenue });
      }
    }
    return dateVenueWithEvents;
  };
  const calendarWithEvents = daysOfDecemberWithEvents();

  return (
    <>
      <section className="flex flex-wrap justify-center mt-8">
        {calendarWithEvents.map((calendarWithEvent) => {
          return calendarWithEvent.homeTeam && calendarWithEvent.awayTeam ? (
            <Link
              href={`events/${calendarWithEvent.homeTeamSlug}-vs-${calendarWithEvent.awayTeamSlug}`}
            >
              <div
                key={`event-div${calendarWithEvent.homeTeam}-vs${calendarWithEvent.awayTeam}`}
                className="relative p-6 w-80 md:w-72 lg:w-56 h-44 lg:h-32 mx-2 my-2 shadow-sm bg-blue-800 shadow-blue-800"
              >
                <div className="text-xs absolute">
                  {calendarWithEvent.dateVenue}
                </div>
                <div className="text-xs absolute right-6">
                  {calendarWithEvent.timeVenueUTC}
                </div>
                <div className="mt-8">
                  <div>{calendarWithEvent?.homeTeam?.toUpperCase()}</div>
                  <div>{calendarWithEvent?.awayTeam?.toUpperCase()}</div>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href={`events/${
                calendarWithEvent.homeTeam
                  ? calendarWithEvent.homeTeamSlug
                  : 'to-be-confirmed'
              }-vs-${
                calendarWithEvent.awayTeam
                  ? calendarWithEvent.awayTeamSlug
                  : 'to-be-confirmed'
              }`}
            >
              <div
                key={`event-div-${
                  calendarWithEvent.homeTeam
                    ? calendarWithEvent.homeTeam.officialName
                    : ''
                }-vs-${
                  calendarWithEvent.awayTeam
                    ? calendarWithEvent.awayTeam.officialName
                    : ''
                }`}
                className="relative p-6 w-80 md:w-72 lg:w-56 h-44 lg:h-32 mx-2 my-2 shadow-sm bg-blue-800 shadow-blue-800"
              >
                <div className="text-xs absolute">
                  {calendarWithEvent.dateVenue}
                </div>
                <div className="text-xs absolute right-6">
                  {calendarWithEvent.timeVenueUTC}
                </div>
                <div className="mt-8">
                  <div>{calendarWithEvent?.homeTeam?.toUpperCase()}</div>

                  <div>{calendarWithEvent?.awayTeam?.toUpperCase()}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
