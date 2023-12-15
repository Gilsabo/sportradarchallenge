'use client';
import NotScheduled from '../../../util/NotScheduled';
import NotUpdated from '../../../util/NotUpdated';
import { useAppContext } from '../../AppProvider';

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

  if (homeTeamSlug === 'undefined' || awayTeamSlug === 'undefined') {
    return <NotUpdated />;
  }

  const findEventInformations = sportEvents.find(
    (sportEvent) =>
      sportEvent.homeTeam?.slug === homeTeamSlug || !sportEvent.homeTeam,
  );

  return (
    <section className="flex flex-col items-center mt-8">
      <div className="mb-2 text-center">
        Competition {findEventInformations?.originCompetitionName}{' '}
        {findEventInformations?.season}
      </div>
      <div className="mb-2 text-sm">{findEventInformations.stage.id}</div>

      <div className="text-center mt-4 text-xl">
        Result
        <div className="mb-2 text-center text-xs mt-2">
          {findEventInformations.status} at {findEventInformations.timeVenueUTC}{' '}
          on {findEventInformations.dateVenue}
        </div>
        <div className="flex flex-col bg-blue-800 mt-4 p-8 shadow-sm text-2xl">
          <div>
            {findEventInformations.homeTeam?.officialName.toUpperCase() ||
              'to be confirmed'}{' '}
            <span className="text-sm">
              {`(${findEventInformations.homeTeam?.teamCountryCode || 'tbc'})`}{' '}
            </span>
            {findEventInformations.result?.homeGoals}
          </div>
          <span>vs.</span>
          <div>
            {findEventInformations.awayTeam?.officialName.toUpperCase() ||
              'to be confirmed'}{' '}
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
