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
        Competition {findEventInformations.originCompetitionName}{' '}
        {findEventInformations.season}
      </div>
      <div className="mb-2">{findEventInformations.stage.id}</div>
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
          <spans>vs.</spans>{' '}
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
