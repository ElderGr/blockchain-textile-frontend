import axios from "axios";
import { Constants } from '../utils/Constants';


// Function to get product by id
export function get(id) {
	return axios.get(`${Constants.url}/product/${id}`);
}