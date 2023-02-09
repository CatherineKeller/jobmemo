const apiBaseUrl = "http://localhost:3000/api";

export async function fetchAllLists() {
  const httpResponse = await fetch(`${apiBaseUrl}/lists`);
  const lists = await httpResponse.json();
  console.log(lists);
  // await (await fetch(url)).json()
  return lists;
}
export async function createCard({ 
    title,
    description,
    link,
    compagny_name,
    compagny_address,
    contact_name,
    contact_firstname,
    contact_email,
    contact_phone,
    notes,
    position,
    status_id,
    candidacy_id,
    type_compagny_id,
    listId
  }) {
  await fetch(`${apiBaseUrl}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      link,
      compagny_name,
      compagny_address,
      contact_name,
      contact_firstname,
      contact_email,
      contact_phone,
      notes,
      position,
      status_id,
      candidacy_id,
      type_compagny_id,
      list_id: listId
    })
  });
}
export async function deleteCard(cardId) {
  await fetch(`${apiBaseUrl}/cards/${cardId}`, {
    method: "DELETE"
  });
}
export async function fetchAllTypesCompagny() {
  const httpResponse = await fetch(`${apiBaseUrl}/typescompagny`);
  const typescompagny = await httpResponse.json();
  return typescompagny;
}
export async function fetchAllCandidacies() {
  const httpResponse = await fetch(`${apiBaseUrl}/candidacies`);
  const candidacies = await httpResponse.json();
  return candidacies;
}