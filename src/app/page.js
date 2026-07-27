
export default function Home() {
  return (
   <section className=" hero bg-base-100 min-h-screen bg-base-100">
  <div className="flex-col lg:flex-row-reverse gap-16">

    <img
      src="/images/office.jpg"
      className="max-w-md rounded-xl"
      alt=""
    />

    <div>
      <p className="text-secondary uppercase tracking-[6px]">
        Premium Graduation Hats
      </p>

      <h1 className="text-6xl font-bold text-primary">
       Afghan Geeks Dashboard
      </h1>

      <p className="py-6 text-base-content/80 max-w-lg">
        Design a graduation cap that reflects your success.
        Premium materials, glitter bands and meaningful pins.
      </p>

      <div className="flex gap-4">
        <button className="btn btn-primary">
          Order Now
        </button>

        <button className="btn btn-outline btn-secondary">
          Explore
        </button>
      </div>
    </div>

  </div>
</section>
  );
}
