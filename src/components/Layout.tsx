 import React from "react";
// import Head from "next/head";

// import { LayoutTypes } from "../../interfaces/general";
// import { generalAppSelector } from "../../redux-store/reducers/general";
// import Sidebar from "../specific/Sidebar";
// import SuperAdminSidebar from "../specific/SuperAdminSidebaar";

// const Layout: React.FC<LayoutTypes> = ({ className, title, children }) => {
//   const { systemTheme } = useTheme();
//   const { navBarOpen } = useSelector(generalAppSelector);
//   const { data } = useGetCurrentUserSession();

//   const materialTheme = createTheme({
//     palette: {
//       mode: systemTheme,
//     },
//   });

//   return (
//     <>
//       <Head>
//         <link rel="shortcut-icon" href="/favicon.ico" type="image/x-icon" />
//         <link rel="icon" href="/favicon.ico" type="image/x-icon" />
//         <title>{`${title ?? "Chat App"}`}</title>
//       </Head>

//       <MaterialThemeProvider theme={materialTheme}>
//         <div className="relative flex  min-h-screen scroll-smooth dark:bg-backgroundDark bg-backgroundLight">
//           <div className="fixed overflow-y-auto xl:overflow-y-hidden overflow-x-hidden z-30 left-0 bottom-0 h-screen">
//             <Sidebar />
//           </div>

//           <div
//             className={`min-h-screen relative w-full ${
//               navBarOpen ? "ml-0 sm:ml-80" : "ml-20"
//             } overflow-auto`}
//           >
//             <div className={className}>{children}</div>
//           </div>
//         </div>
//       </MaterialThemeProvider>
//     </>
//   );
// };

// export default Layout;
