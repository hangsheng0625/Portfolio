// import React from "react";
// import { serviceData } from "@/assets/assets";
// import Image from "next/image";

// const MyServices = () => {
//   return (
//     <div className="py-20 px-6 lg:px-10">
//       <h2
//         id="services"
//         className="text-center text-4xl lg:text-5xl font-bold mb-6 font-ovo text-darkTheme dark:text-white"
//       >
//         My Services
//       </h2>

//       <p className="text-center text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
//         I offer a range of services to help you build and enhance your online
//         presence. My expertise includes modern web development solutions.
//       </p>

//       <div className="grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
//         {serviceData.map(({ icon, title, description, link }, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-cardDark rounded-xl p-8 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-lightHover dark:hover:bg-gray-700 group"
//           >
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-colors duration-300">
//                 <Image
//                   src={icon}
//                   alt={title}
//                   width={32}
//                   height={32}
//                   className="w-8 h-8"
//                 />
//               </div>
//               <h3 className="text-xl lg:text-2xl font-semibold text-darkTheme dark:text-white">
//                 {title}
//               </h3>
//               <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                 {description}
//               </p>
//               <a
//                 href={link}
//                 className="text-blue-500 dark:text-blue-400 hover:underline font-medium text-base transition-colors duration-200"
//               >
//                 Learn More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyServices;
