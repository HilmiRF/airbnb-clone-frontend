import axios from "axios";
import { Agent } from "https";
import crypto from "crypto";

const API_AIRBNB = process.env.SERVER_AIRBNB_API;

const agent = new Agent({
	rejectUnauthorized: false,
	secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
});

export const airBnbApi = axios.create({
	baseURL: API_AIRBNB,
	proxy: false,
	httpsAgent: agent,
});
