// import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs"
export default function Home() {
  return(
    // <ClerkProvider>
      <div className="h-screen">
        <UserButton afterSignOutUrl="/"/> 
        {/* this should be afterSignOutUrl according to instructions*/}
      </div>
    // </ClerkProvider>
  )
}