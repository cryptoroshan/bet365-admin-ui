import * as env from "@/app/env";

export const getUserInfo = async (
  token: string,
  role: string,
  user_id: number
) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = 7;
  else if (role === "Type5Admin") role_url = 5;
  else if (role === "Type3Admin") role_url = 3;

  const API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/users/info?user_id=${user_id}`;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-ACCESS-TOKEN", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    console.log(API_ENDPOINT)
    const data = await response.json();
    console.log(data)
    return {
      status: response.status,
      data: data
    };
  } catch (err) {
    console.log(err);
  }
};