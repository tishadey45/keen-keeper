const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen pb-80">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6 ">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn btn-primary">+ App a friend</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">10</h2>
          <p>
            Total friends
          </p>
        </div>
        </div>
    </div>
  );
};

export default Banner;
