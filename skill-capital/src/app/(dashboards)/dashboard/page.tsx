import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";


const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Not Contacted" />
          <UserCard type="Warm Lead" />
          <UserCard type="Attempted" />
          <UserCard type="Registered" />
          <UserCard type="Oppurtunity" />
          <UserCard type="Cold Lead" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
        </div>
        {/* BOTTOM CHARTS  */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
