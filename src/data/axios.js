import axios from "axios";

export default axios.create({
	baseURL: "https://uinames.com/api",
	Headers: {"Accept": "application/json"} 
});