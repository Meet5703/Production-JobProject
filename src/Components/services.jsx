import serviceImg from "../assets/9430578_4153553-removebg-preview.png";
const ServiceCard = () => {
  return (
    <div className=" max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="items-center flex flex-col text-center space-y-4 mb-5">
        <h1 className="text-xl md:text-3xl font-bold">
          <span className="text-[rgb(109,150,240)]">OUR GOAL</span> IS TO ATTAIN
          YOUR <span className="text-[rgb(109,150,240)]">EXPECTATIONS</span>
        </h1>
        <span className="bg-blue-600 p-[1px] w-1/2"></span>
        <p className="text-sm lg:text-xl">
          With Helix Tech-IT Solution, you get to experience a unique journey
          that starts along with learning and upgrading your skills through
          staffing solutions which will start with resume building and will end
          up with you landing a job at your dream company.
        </p>
        <p className="text-sm lg:text-xl">
          Keeping in mind current market needs and your knowledge, we will help
          you to get whole detailed IT training through which you can get hold
          of all the current trends which will help you to keep up with
          knowledge regarding that and can make you the best candidate for the
          recruiter.
        </p>
      </div>
      <div className="text-center my-20">
        <h2 className="text-4xl tracking-tight text-[rgb(109,150,240)] font-bold text-primary-800">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        {/* <!-- can help image --> */}
        <div className="  col-span-1  ">
          <img
            className="w-full md:w-full pb-16"
            src={serviceImg}
            alt="can_help_banner"
          />
        </div>
        {/* <!-- end can help image --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          <div className="w-full mb-4 px-2">
            <div className="h-full p-6 border border-blue-400 rounded-br-xl">
              <h3 className="text-sm lg:text-2xl font-bold mb-4">
                Dynamic Personalization
              </h3>
              <p className="text-xs lg:text-sm">
                Our platform leverages user data and behavior to provide a
                highly personalized experience, with dynamic content and product
                recommendations that change in real-time.
              </p>
            </div>
          </div>

          <div className="w-full mb-4 px-2">
            <div className="h-full p-6 border border-blue-400 rounded-br-xl">
              <h3 className="text-sm lg:text-2xl font-bold mb-4">
                Mobile-Optimized Interface
              </h3>
              <p className="text-xs lg:text-sm">
                Our website is designed with a mobile-first approach, offering a
                seamless browsing experience across all devices, including
                smartphones and tablets.
              </p>
            </div>
          </div>

          <div className="w-full mb-4 px-2">
            <div className="h-full p-6 border border-blue-400 rounded-br-xl">
              <h3 className="text-sm lg:text-2xl font-bold mb-4">
                24/7 Customer Support
              </h3>
              <p className="text-xs lg:text-sm">
                Our U.S.-based customer support team is available around the
                clock to answer any questions, resolve any issues, and provide
                helpful solutions. Whether its through email, phone, or live
                chat, were always here to support you.
              </p>
            </div>
          </div>

          <div className="w-full mb-4 px-2">
            <div className="h-full p-6 border border-blue-400 rounded-br-xl">
              <h3 className="text-sm lg:text-2xl font-bold mb-4">
                Secure Payment Processing
              </h3>
              <p className="text-xs lg:text-sm">
                We use cutting-edge security measures to protect our customers
                sensitive information and ensure the safety of all transactions
                made on our site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
