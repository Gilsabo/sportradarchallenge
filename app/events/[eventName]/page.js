import EventNameInformation from './EventNameInformation';

export default function EventName(props) {
  return (
    <main className="flex justify-center">
      <EventNameInformation params={props.params} />
    </main>
  );
}
