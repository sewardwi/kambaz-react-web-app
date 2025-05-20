import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
      <span className="border border-dark rounded-pill px-2 py-2 me-3">
        40% of Total
      </span>
      <BsPlus className="mx-2" style={{ bottom: "1px", fontSize: "2rem" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}