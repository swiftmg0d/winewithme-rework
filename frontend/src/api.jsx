const backendUrl = "http://localhost:8080/api";
export default async function getWineries() {
  const response = await fetch(`${backendUrl}/winery/list`);
  return response.json();
}
