import axios from "axios";

const FatchData = async () => {
  let url = "https://api.randomuser.me/";
  let response = await axios.get(url);
  let data = response.data.results;
  return data;
};
FatchData();
export default FatchData;
