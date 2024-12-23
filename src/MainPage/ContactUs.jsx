// import { useState } from "react";

// function ContactUs() {
//   return (
//     <section className="p-6 sm:p-14 bg-[#020a08]">
//       <div className="bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="p-8 sm:p-16 text-center">
//           <p
//             className="text-base sm:text-lg font-extrabold tracking-wide mb-4 text-white"
//             style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
//           >
//             Contact Us
//           </p>

//           <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide mb-7 italic text-white">
//             Discuss With Us
//           </h1>

//           <p className="text-base sm:text-lg text-[#7d8180] font-semibold mb-10 sm:mb-14">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at{" "}
//             <br />
//             dictum risus, non suscipit arcu.
//           </p>
//         </div>

//         {/* Form Section */}
//         <div className="max-w-4xl mx-auto">
//           <form className="space-y-8">
//             {/* Name and Email Row */}
//             <div className="flex flex-col md:flex-row md:gap-8">
//               {/* Name Field */}
//               <div className="flex-1 relative">
//                 <label
//                   htmlFor="name"
//                   className="block text-sm text-white font-medium mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="block w-full border-0 border-b-2 bg-transparent text-white outline-none focus:ring-0 focus:border-green-400"
//                 />
//               </div>

//               {/* Email Field */}
//               <div className="flex-1 relative mt-6 md:mt-0">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm text-white font-medium mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="block w-full border-0 border-b-2 bg-transparent text-white outline-none focus:ring-0 focus:border-green-400"
//                 />
//               </div>
//             </div>

//             {/* Subject Field */}
//             <div className="relative">
//               <label
//                 htmlFor="subject"
//                 className="block text-sm text-white font-medium mb-1"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 className="block w-full border-0 border-b-2 bg-transparent text-white outline-none focus:ring-0 focus:border-green-400"
//               />
//             </div>

//             {/* Message Field */}
//             <div className="relative">
//               <label
//                 htmlFor="message"
//                 className="block text-sm text-white font-medium mb-1"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 className="block w-full border-0 border-b-2 bg-transparent text-white outline-none focus:ring-0 focus:border-green-400"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="text-center mt-8">
//               <button
//                 type="submit"
//                 className="bg-green-400 hover:bg-green-500 text-black py-3 px-8 rounded-lg font-semibold shadow-md"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactUs;
