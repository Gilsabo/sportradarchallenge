import Link from 'next/link';
import sportData from '../../public/sportData.json';

export default function Events() {
  const sportEvents = sportData.data;

  return (
    <main>
      <div>
        {sportEvents.map((sportevent) =>
          sportevent.homeTeam && sportevent.awayTeam ? (
            <section
              key={`sportevent-div-${sportevent.homeTeam.abbreviation}vs${sportevent.awayTeam.abbreviation}`}
            >
              <Link
                href={`events/${sportevent.homeTeam.slug}-vs-${sportevent.awayTeam.slug}`}
              >
                <div>{sportevent.dateVenue}</div>
                <div>{sportevent.timeVenueUTC}</div>
                <div>{sportevent.homeTeam.officialName}</div>
                <div>{sportevent.awayTeam.officialName}</div>
              </Link>
            </section>
          ) : (
            <section
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
    </main>
  );
}
