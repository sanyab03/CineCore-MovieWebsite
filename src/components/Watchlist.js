import React from 'react';

const Watchlist = () => {
  const sampleWatchlist = [
    {
      id: 1,
      title: 'Inception',
      poster: 'https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      rating: '8.8',
      genre: 'Sci-Fi',
    },
    
  ];

  return (
    <div className="bg-black-900 text-gray-100 min-h-screen p-4 md:p-8 w-full overflow-auto">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-8 text-center">Your Watchlist</h2>

        {/* Filtering/Sorting Options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <select className="bg-green-900 text-gray-200 p-3 rounded-md">
              <option>Sort by: Rating</option>
              <option>Sort by: Title</option>
              <option>Sort by: Genre</option>
            </select>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700">
              Add New
            </button>
          </div>
        </div>

        {/* Watchlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {sampleWatchlist.map((item) => (
            <div
              key={item.id}
              className="bg-green-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150'; // Placeholder for broken images
                  console.error(`Image failed to load for ${item.title}`);
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.genre}</p>
                <p className="text-yellow-400 mt-2">⭐ {item.rating}</p>

                {/* Action buttons */}
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-red-600 px-3 py-1 rounded-md text-white hover:bg-red-700">
                    Remove
                  </button>
                  <button className="bg-green-600 px-3 py-1 rounded-md text-white hover:bg-green-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
