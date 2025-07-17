import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    rating: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title && formData.rating && formData.content) {
      setReviews([...reviews, formData]);

      setFormData({
        title: "",
        rating: "",
        content: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-black text-gray-100 p-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Reviews</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block mb-2 font-semibold"
              aria-label="Review Title"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-green-100 text-black-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              style={{ color: 'black' }} 
              placeholder="Enter the title of the movie/show"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block mb-2 font-semibold"
              aria-label="Rating"
            >
              Rating (1-10):
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full p-2 rounded-md bg-green-100 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Rate the movie/show out of 10"
              // style={{ '::placeholder': { color: 'black' } }} // Custom style for placeholder
              style={{ color: 'black' }}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block mb-2 font-semibold"
              aria-label="Review Content"
            >
              Review:
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-green-100 text-black-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Write your review here"
              style={{ color: 'black' }} 
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition-colors"
          >
            Submit Review
          </button>
        </form>

        {/* Reviews Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Your Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-400">
              No reviews submitted yet. Be the first to review a movie or show!
            </p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-bold">{review.title}</h4>
                  <p className="text-yellow-400">Rating: {review.rating}/10</p>
                  <p className="text-gray-300 mt-2">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
