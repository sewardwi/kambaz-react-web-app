/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function AssignmentsControlButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  return (
    <div className="float-end d-flex">
      <span className="border border-dark rounded-pill px-2 me-3">
        40% of Total
      </span>
      {isFaculty &&
      <span>
        <BsPlus className="mx-2" style={{ bottom: "1px", fontSize: "2rem" }} />
        <IoEllipsisVertical className="fs-4" />
      </span>
      }
    </div>
);}