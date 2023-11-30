import sportData from '../public/sportData.json';

export default function Home() {
  const sportEvents = sportData.data;

  console.log(sportEvents);
  return (
    <main>
      <div>
        {sportEvents.map((sportevent) => {
          return (
            <section>
              <div>{sportevent.dateVenue}</div>
              <div>{sportevent.timeVenueUTC}</div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
