import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  // 定义一个默认的格式，用于当数据尚未加载时返回
  const defaultFormat = {
    labels: [],
    values: [],
  };

  // 获取技能数据
  const { data } = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);

  if (!data) {
    return defaultFormat;
  }

  const labels = Object.keys(data);
  const values = Object.values(data);

  return {
    labels: labels,
    values: values,
  };
};

export default useSkills;