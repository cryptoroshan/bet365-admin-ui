import * as env from "@/app/env";

export const getUsersCreatedBy = async (id: number) => {
  const API_ENDPOINT =
    env.SERVER_URL + "/admin/superagent/users/createdBy/" + id;
  const myHeaders = new Headers();
  myHeaders.append("X-ACCESS-TOKEN", env.SUPER_AGENT_TOKEN);

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
  type: number,
  id: number,
  transfer_type: string,
  balance_type: string,
  balance: number
) => {
  const API_ENDPOINT =
    env.SERVER_URL +
    `/admin/${type}/users/${id}/balance/${transfer_type}/${balance_type}`;
  const myHeaders = new Headers();
  if (type === 9) myHeaders.append("X-ACCESS-TOKEN", env.SUPER_AGENT_TOKEN);
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
    body: raw
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
