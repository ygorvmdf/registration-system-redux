const saveOnLocalStorage = (client) => {
  let clients = JSON.parse(localStorage.getItem('clients'));
  if (!clients) {
    localStorage.setItem('clients', JSON.stringify([client]));
    return;
  }
  clients = [...clients, client];
  localStorage.setItem('clients', JSON.stringify(clients));
}

export default saveOnLocalStorage;
