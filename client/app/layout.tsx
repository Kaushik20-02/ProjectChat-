import {SessionProvider} from "../components/SessionProvider"
import TopBar from "../components/TopBar"
import { getServerSession } from "next-auth"
import {authOptions} from '../pages/api/auth/[...nextauth]'
import Login from "../components/Login"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session= await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
          {!session ?(
            <Login/>
          ):(
          <div className=" bg-[#f7f5ff] dark:bg-[#444c5c] ">
            <div className="bg-[#ccc8dd] dark:bg-[#5b626f] rounded-b-2xl">
              <TopBar/>
            </div>

            <div>{children}</div>
          </div>
          )}
      </body>
    </html>
  )
}