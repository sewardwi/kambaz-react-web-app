/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function EnrollmentProtectedRoute({ children }: { children: any }) {
  const { cid } = useParams(); // Get course ID from URL
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  
  // Check if user is enrolled in this specific course
  const isEnrolled = enrollments.some(
    (enrollment: { user: any; course: any; }) =>
      enrollment.user === currentUser._id &&
      enrollment.course === cid
  );
  
  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Dashboard" />;
  }
}