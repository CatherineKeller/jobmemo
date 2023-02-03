const apiBaseUrl = "http://localhost:3000/api";

export async function fetchAllLists() {
  const httpResponse = await fetch(`${apiBaseUrl}/lists`);
  const lists = await httpResponse.json();
  console.log(lists);
  return lists;
}
export async function createCard({ content, listId }) {
  await fetch(`${apiBaseUrl}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content,
      list_id: listId
    })
  });
}