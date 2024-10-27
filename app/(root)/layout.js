// import { ClerkProvider } from "@clerk/nextjs"
// import "../globals.css"

// export const metadata = {
//   title: 'haiku_1',
//   description: 'Next 14 Social Media App for Plant Care',
// }

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     </ClerkProvider>
//   )
// }


import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@components/layout/leftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";

export const metadata = {
  title: "Haiku_1",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
