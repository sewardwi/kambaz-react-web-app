import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="mx-2" style={{ bottom: "1px", fontSize: "2rem" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}