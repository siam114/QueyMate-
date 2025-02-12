import { useState } from "react";

const NewsLater = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Fake confirmation message
    setMessage("Subscription successful! Check your email.");
    setEmail(""); // Clear input field
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 my-10 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest services?
          </strong>

          <form className="mt-6" onSubmit={handleSubscribe}>
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#09b850] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#09b84fbe]"
              >
                Subscribe
              </button>
            </div>
          </form>

          {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
