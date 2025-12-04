import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const API_URL = import.meta.env.VITE_API_URL || "";

if (!API_URL) {
  console.warn("VITE_API_URL is not set. Axios will use relative paths.");
}

export const Instance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    Accept: "application/json",
  },
});

Instance.interceptors.request.use((config) => {
  const token = cookies.get("Kao_cookie_user");
  if (token) {
    const current = (config.headers ?? {}) as any;
    if (typeof current.set === "function") {
      // Axios v1 AxiosHeaders supports set()
      current.set("Authorization", `Bearer ${token}`);
      config.headers = current;
    } else {
      // Plain object headers – merge, do not clobber (preserve Content-Type)
      config.headers = { ...current, Authorization: `Bearer ${token}` } as any;
    }
  }
  return config;
});
