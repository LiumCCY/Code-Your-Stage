import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");

  const departmentToAcademyMap = {
    "工商管理學系 科技管理組": "管理學院",
    "工商管理學系":"管理學院",
    "資訊管理學系":"管理學院",
    "國際企業學系":"管理學院",
    "圖書資訊學系":"管理學院",
    "電機工程學系":"電資學院",
    "生物機電工程學系":"工學院",
    "材料科學與工程學系":"工學院",
    "工程科學及海洋工程學系":"工學院",
    "醫學工程學系":"工學院",
    "生醫電資所":"工學院",
    "資訊工程學系":"電資學院",
    "資訊工程研究所":"電資學院",
    "數學系":"理學院",
    "物理學系":"理學院",
    "經濟學系":"社科院",
    "經濟系":"社科院",
    "會計系":"社科院",
    "社會學系":"社科院",
    "科際整合法律學研究所":"社科院",
    "心理所一般組":"理學院",
    "心理學系":"理學院",
    "外國語文學系":"文學院",
    "歷史學系":"文學院",
    "戲劇學系":"文學院",
    "物理治療學系":"醫學院",
    "創新領域學士學位學程":"學程"
  }
  const academyData = {};

  for (const department in data) {
    const academy = departmentToAcademyMap[department];
    if (academy) {
      
      academyData[academy] = (academyData[academy] || 0) + data[department];
    }
  }
 
  //const labels = data && Object.keys(academyData);
  //const values = data && Object.values(academyData);
  console.log(data && Object.keys(academyData))
  console.log(data && Object.values(academyData))
  return {
    labels : data && Object.keys(academyData),
    values : data && Object.values(academyData)
  };
};

export default useAcademystats;
