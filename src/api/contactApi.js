
export async function getContacts() {
  const res = await fetch('/contacts.json');
  if (!res.ok) throw new Error('Failed to load contacts.json');
  const data = await res.json();
  return data;
}


export async function addContactAPI(contact) {
  // simulate server delay
  await new Promise(r => setTimeout(r, 200));
  return { id: Date.now(), ...contact };
}
