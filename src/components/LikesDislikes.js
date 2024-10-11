import React from "react";

const LikesDislikes = () => {
  const sampleLikes = [
    {
      id: 1,
      title: "Interstellar",
      poster: "https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: "8.6",
      genre: "Sci-Fi",
    },
  ];

  const sampleDislikes = [];

  return (
    <div className="bg-black w-full overflow-hidden"> {/* Ensure full width and height */}
      <div className="mx-auto"> {/* Center the content */}
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Likes & Dislikes</h2>

        {/* Likes Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-green-400">Liked Movies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sampleLikes.map((movie) => (
              <div
                key={movie.id}
                className="bg-green-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover bg-black"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                  <p className="text-gray-400">{movie.genre}</p>
                  <p className="text-yellow-400 mt-2">⭐ {movie.rating}</p>
                  {/* Action buttons */}
                  <div className="mt-4 flex justify-between items-center">
                    <button className="bg-red-600 px-3 py-1 rounded-md text-white hover:bg-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dislikes Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold mb-4 text-red-400">Disliked Movies</h3>
          {sampleDislikes.length === 0 ? (
            <p className="text-gray-400 text-center text-xl">
              You haven't disliked any movies yet!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sampleDislikes.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-red-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-64 object-cover bg-black"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                    <p className="text-gray-400">{movie.genre}</p>
                    <p className="text-yellow-400 mt-2">⭐ {movie.rating}</p>
                    {/* Action buttons */}
                    <div className="mt-4 flex justify-between items-center">
                      <button className="bg-green-600 px-3 py-1 rounded-md text-white hover:bg-green-700">
                        Like Again
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikesDislikes;
