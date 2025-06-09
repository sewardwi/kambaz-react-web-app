import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const findEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);
  return data;
}

export const enrollUserInDb = async (courseId: string, userId: string) => {
  const { data } = await axios.post(ENROLLMENTS_API, { courseId, userId });
  return data;
}

export const unenrollUserInDb = async (courseId: string, userId: string) => {
  const { data } = await axios.delete(`${ENROLLMENTS_API}/${courseId}/${userId}`);
  return data;
}