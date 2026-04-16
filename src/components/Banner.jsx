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
            <button className="btn bg-green-900 text-white">+ App a friend</button>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-3xl font-bold text-gray-800">10</h2>
                <p className="text-gray-500 mt-2">Total Friends</p>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-3xl font-bold text-gray-800">3</h2>
                <p className="text-gray-500 mt-2">On Track</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-3xl font-bold text-gray-800">6</h2>
                <p className="text-gray-500 mt-2">Need Attention</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-3xl font-bold text-gray-800">12</h2>
                <p className="text-gray-500 mt-2">Interactions This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
