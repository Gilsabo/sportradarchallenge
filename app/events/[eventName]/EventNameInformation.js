import sportData from '../../../public/sportData.json';

export default function EventNameInformation(props) {
  console.log('propiiis', props);
  const sportEvents = sportData.data;
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
    <div>
      <div>
        <>
          <div>Competition{findEventInformations.originCompetitionName}</div>
          <div>{findEventInformations.stage.id}</div>
          <div>
            Result {findEventInformations.homeTeam?.officialName}{' '}
            {findEventInformations.homeTeam?.teamCountryCode}{' '}
            {findEventInformations.result?.homeGoals}{' '}
            {findEventInformations.awayTeam?.officialName}{' '}
            {findEventInformations.awayTeam?.teamCountryCode}{' '}
            {findEventInformations.result?.awayGoals}
          </div>
        </>
      </div>
    </div>
  );
}
