import Booking from "./components/Booking/Booking";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <Booking/>
        </div>
        <div className="col-span-2 bg-blue-500">Map</div>
      </div>
      <div>

      </div>
    </div>
  );
}
