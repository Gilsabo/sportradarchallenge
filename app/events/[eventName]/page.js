import sportData from '../../../public/sportData.json';

export default function eventName(props) {
  const sportEvents = sportData.data;
  console.log('params', props.params.eventName);
  const slugsWithoutVs = props.params.eventName.replace('-vs-', ' ');
  console.log('slugWithoutVs', slugsWithoutVs);
  const splitSlugs = slugsWithoutVs.split(' ');
  const homeTeamSlug = splitSlugs[0];
  const awayTeamSlug = splitSlugs[1];

  console.log('homeTeamSlug', homeTeamSlug, 'awayTeamSlug', awayTeamSlug);

  return <div>eventName</div>;
}
