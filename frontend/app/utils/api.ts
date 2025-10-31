// app/utils/api.ts

const BASE_URL = "http://localhost:5000/api"; // backend base URL

export async function apiPost(endpoint: string, data: object) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return { ok: res.ok, data: json };
  } catch (error) {
    console.error("API Error:", error);
    return { ok: false, data: { error: "Failed to connect to server" } };
  }
}

export async function apiGet(endpoint: string) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    const json = await res.json();
    return { ok: res.ok, data: json };
  } catch (error) {
    console.error("API Error:", error);
    return { ok: false, data: { error: "Failed to connect to server" } };
  }
}
