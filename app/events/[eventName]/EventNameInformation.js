'use client';
import { useAppContext } from '../../AppProvider';

export default function EventNameInformation(props) {
  console.log('propiiis', props);
  const { sportEvents } = useAppContext();
  console.log('params', props.params.eventName);
  const slugsWithoutVs = props.params.eventName.replace('-vs-', ' ');
  console.log('slugWithoutVs', slugsWithoutVs);
  const splitSlugs = slugsWithoutVs.split(' ');
  const homeTeamSlug = splitSlugs[0];
  const awayTeamSlug = splitSlugs[1];

  console.log('homeTeamSlug', homeTeamSlug, 'awayTeamSlug', awayTeamSlug);
  const findEventInformations = sportEvents.find(
    (sportEvent) =>
      sportEvent.homeTeam?.slug === homeTeamSlug ||
      sportEvent.homeTeam === null,
  );
  console.log('findEventInformations', findEventInformations);

  return (
    <section className="flex flex-col items-center mt-8">
      <div className="mb-2">
        Competition {findEventInformations.originCompetitionName}
      </div>
      <div className="mb-2">{findEventInformations.stage.id}</div>
      <div>
        Result{' '}
        {findEventInformations.homeTeam?.officialName || 'not played yet'}{' '}
        {`(${
          findEventInformations.homeTeam?.teamCountryCode || 'to be confirmed'
        })`}{' '}
        {findEventInformations.result?.homeGoals} <spans>vs.</spans>{' '}
        {findEventInformations.awayTeam?.officialName}{' '}
        {`(${findEventInformations.awayTeam?.teamCountryCode})`}{' '}
        {findEventInformations.result?.awayGoals}
      </div>
    </section>
  );
}
