import BookingCardPage from "@/components/BookingCard";

const MyListingsPage = async () => {
  const res = await fetch("http://localhost:5000/room", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="container mx-auto px-2 md:px-0 py-10">
      <h2 className="text-4xl text-dark font-bold mt-2 mb-5">My Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch lg:grid-cols-3 gap-5">
        {data.map((newData) => {
          return <BookingCardPage newData={newData} key={newData._id} />;
        })}
      </div>
    </div>
  );
};

export default MyListingsPage;
