export const fetchData = async () => {
  const response = await fetch("http://127.0.0.1:8000/house/");
  const data = await response.json();
  return data;
};

export const userdetail = async () => {
  const response = await fetch("http://127.0.0.1:8000/user/");
  const data = await response.json();
  return data;
};