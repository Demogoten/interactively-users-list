const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchUsers;
