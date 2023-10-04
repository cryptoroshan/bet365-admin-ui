import * as env from "@/app/env";

export const getUserById = async (id: number, token: string, role: string) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = 7;
  else if (role === "Type5Admin") role_url = 5;
  else if (role === "Type3Admin") role_url = 3;

  const API_ENDPOINT =
    env.SERVER_URL + `/admin/${role_url}/users/${id}`;
  const myHeaders = new Headers();
  myHeaders.append("X-ACCESS-TOKEN", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUsersCreatedBy = async (id: number, token: string, role: string) => {
  const API_ENDPOINT =
    env.SERVER_URL + `/admin/7/users/createdBy/${id}`;
  const myHeaders = new Headers();
  console.log(API_ENDPOINT);
  console.log(token);
  myHeaders.append("X-ACCESS-TOKEN", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const transferBalance = async (
  type: any,
  id: number,
  transfer_type: string,
  balance_type: string,
  balance: number
) => {
  const API_ENDPOINT =
    env.SERVER_URL +
    `/admin/${type}/users/${id}/balance/${transfer_type}/${balance_type}`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (type === "superagent")
    myHeaders.append("X-ACCESS-TOKEN", env.SUPER_AGENT_TOKEN);
  else if (type === 7)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_7_TOKEN);
  else if (type === 5)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_5_TOKEN);
  else if (type === 3)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_3_TOKEN);

  let raw;

  if (balance_type === "casino")
    raw = JSON.stringify({
      casino: balance,
    });
  else if (balance_type === "sports_betting")
    raw = JSON.stringify({
      sports_betting: balance,
    });
  else
    raw = JSON.stringify({
      agent: balance,
    });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const newUser = async (
  username: string,
  role: string,
  password: string
) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = "superagent";
  else if (role === "Type5Admin") role_url = 7;
  else if (role === "Type3Admin") role_url = 5;

  const API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/users`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (role_url === "superagent")
    myHeaders.append("X-ACCESS-TOKEN", env.SUPER_AGENT_TOKEN);
  else if (role_url === 7)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_7_TOKEN);
  else if (role_url === 5)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_5_TOKEN);
  else if (role_url === 3)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_3_TOKEN);

  let raw;

  raw = JSON.stringify({
    username: username,
    role: role,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    console.log(API_ENDPOINT);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getBlockStatus = async (
  id: number,
  role: string,
) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = "superagent";
  else if (role === "Type5Admin") role_url = 7;
  else if (role === "Type3Admin") role_url = 5;

  const API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/users/${id}/limits`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (role_url === "superagent")
    myHeaders.append("X-ACCESS-TOKEN", env.SUPER_AGENT_TOKEN);
  else if (role_url === 7)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_7_TOKEN);
  else if (role_url === 5)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_5_TOKEN);
  else if (role_url === 3)
    myHeaders.append("X-ACCESS-TOKEN", env.ADMIN_TYPE_3_TOKEN);

  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    console.log(API_ENDPOINT);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
