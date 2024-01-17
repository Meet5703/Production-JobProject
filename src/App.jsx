/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens";
import About from "./screens/about";
import CourseDetails from "./screens/CourseDetails";
import ServiceDetail from "./screens/ServiceDetail";
import Blogs from "./screens/Blogs";
import Faq from "./screens/FAQ";
import HallOfFames from "./screens/HallOfFames";
import ContactUs from "./screens/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/FAQS" element={<Faq />} />
        <Route path="/HALL OF fAME" element={<HallOfFames />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course/:courseid" element={<CourseDetails />} />
        <Route path="/services/:serviceid" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;

// const MainApp = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Structure />}>
//           <Route index element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/course/:courseId" element={<CourseDetails />} />
//           {/* Add more routes for services */}
//           {/* <Route path="/services/:serviceId" element={<ServiceDetail />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* Add more routes for blogs, FAQs, Hall of Fames, etc. */}
//           {/* <Route path="/Blogs" element={<Blogs />} />
//           <Route path="/FAQS" element={<FAQS />} />
//           <Route path="/HallOfFames" element={<HallOfFames />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };
