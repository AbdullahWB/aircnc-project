import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 pb-20">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
