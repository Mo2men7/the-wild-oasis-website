import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  //Promise.all is a method in JavaScript that takes an array of promises as an input (an iterable) and returns a single promise
  //that resolves when all of the promises passed as an iterable have resolved, or when the iterable contains no promises.

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} />
      <ReservationForm bookedDates={bookedDates} cabin={cabin} />
    </div>
  );
}

export default Reservation;
