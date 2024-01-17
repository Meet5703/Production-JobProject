const Contact = () => {
  return (
    <div>
      <div className="font-sans max-w-6xl mt-20 mx-auto relative bg-[rgb(225,231,255)] rounded-3xl shadow-[0 2px 10px -3px rgba(6,81,237,0.3)] overflow-hidden">
        <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-6 left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200"></div>
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-6 right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300"></div>
        <div className="grid md:grid-cols-2">
          <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-blue-500 font-bold">Contact Us</h2>
            <img
              src="https://readymadeui.com/contact.webp"
              className="mt-4 flex-shrink-0 w-full"
              alt="Contact Us"
            />
          </div>
          <form action="#" className="space-y-8 z-50 py-5 px-8">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="flex items-center">
              <select name="Country" id="Country" className="rounded-l-xl">
                <option
                  value="U.S"
                  className="flex items-center p-4 rounded-xl"
                >
                  U.S +1
                </option>
                <option
                  value="IND"
                  className="flex items-center p-4 rounded-xl"
                >
                  Ind. +91
                </option>
                <option
                  value="AUS"
                  className="flex items-center p-4 rounded-xl"
                >
                  Aus. +61
                </option>
                <option
                  value="CND"
                  className="flex items-center p-4 rounded-xl"
                >
                  Cnd +1
                </option>
                <option value="UK" className="flex items-center p-4 rounded-xl">
                  UK +44
                </option>
              </select>
              <label
                htmlFor="phone-input"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Phone number:
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="phone-input"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border-1 border-blue-500 bg-blue-100 px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:text-white hover:shadow-blue-500 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
