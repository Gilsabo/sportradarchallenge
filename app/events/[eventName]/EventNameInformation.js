'use client';
import { useAppContext } from '../../AppProvider';
import NotScheduled from './NotScheduled';

export default function EventNameInformation(props) {
  const { sportEvents } = useAppContext();

  const slugsWithoutVs = props.params.eventName.replace('-vs-', ' ');

  const splitSlugs = slugsWithoutVs.split(' ');
  const homeTeamSlug = splitSlugs[0];
  const awayTeamSlug = splitSlugs[1];

  if (
    homeTeamSlug === 'to-be-confirmed' &&
    awayTeamSlug === 'to-be-confirmed'
  ) {
    return <NotScheduled />;
  }

  const findEventInformations = sportEvents.find(
    (sportEvent) =>
      sportEvent.homeTeam?.slug === homeTeamSlug ||
      sportEvent.homeTeam === null,
  );
  console.log('findEventInformations', findEventInformations);

  return (
    <section className="flex flex-col items-center mt-8">
      <div className="mb-2 text-center">
        Competition {findEventInformations.originCompetitionName}{' '}
        {findEventInformations.season}
      </div>
      <div className="mb-2">{findEventInformations.stage.id}</div>
      <div className="mb-2 text-center">
        {findEventInformations.status} at {findEventInformations.timeVenueUTC}{' '}
        on {findEventInformations.dateVenue}
      </div>
      <div className="text-center">
        Result
        <div className="flex flex-col">
          <div>
            {findEventInformations.homeTeam?.officialName || 'to be confirmed'}{' '}
            <span className="text-sm">
              {`(${findEventInformations.homeTeam?.teamCountryCode || 'tbc'})`}{' '}
            </span>
            {findEventInformations.result?.homeGoals}
          </div>
          <span>vs.</span>
          <div>
            {findEventInformations.awayTeam?.officialName || 'to be confirmed'}{' '}
            <span className="text-sm">
              {`(${findEventInformations.awayTeam?.teamCountryCode})` || ''}{' '}
            </span>
            {findEventInformations.result?.awayGoals}
          </div>
        </div>
      </div>
    </section>
  );
}
