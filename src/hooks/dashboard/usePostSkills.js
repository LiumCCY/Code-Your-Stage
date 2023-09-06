import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, skills);
      setCookie("studentId", studentId);
      alert("送出成功");
      console.log(studentId)
      console.log(skills)
    } catch (error) {
      console.log(error)
      console.log(studentId)
      console.log(skills)
      alert(error);
    }
  };
};
export default usePostSkills;
