const Faq = () => {
    return (
      <div>
        <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details
            className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium text-xl">
                What is EstateHive, and how does it work?
              </h2>
  
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
  
            <p className="mt-4 leading-relaxed text-gray-700">
              EstateHive is a platform where individuals can add, buy, and manage real estate properties. Users can browse properties, contact agents, and finalize deals conveniently. Agents can manage their listings and connect with potential buyers seamlessly.
            </p>
          </details>
  
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium text-xl">
                How can I list a property on EstateHive?
              </h2>
  
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
  
            <p className="mt-4 leading-relaxed text-gray-700">
              To list a property, simply create an account, navigate to the Add Property section, and fill out the required details such as property type, location, price, and images. Once submitted, your property will be live on the platform.
            </p>
          </details>
  
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium text-xl">
                Are there any fees for using EstateHive?
              </h2>
  
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
  
            <p className="mt-4 leading-relaxed text-gray-700">
              Listing a property on EstateHive is free. However, we offer premium services, such as featured listings and advanced marketing tools, at an additional cost to help you reach more potential buyers.
            </p>
          </details>
  
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium text-xl">
                How can I contact the property owner or agent?
              </h2>
  
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
  
            <p className="mt-4 leading-relaxed text-gray-700">
              Each property listing includes a Contact Agent or Contact Owner button. Clicking it will allow you to send a direct message or find contact details to reach out and discuss further.
            </p>
          </details>
        </div>
      </div>
    );
  };
  
  export default Faq;
  