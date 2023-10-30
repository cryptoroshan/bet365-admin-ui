import * as env from "@/app/env";

export const getCoupons = async (
  token: string,
  role: string,
  id: string,
  start_date: string,
  end_date: string,
  solo: boolean,
  multiple: boolean,
  system: boolean,
  pregame: boolean,
  live: boolean,
  mix: boolean,
  won: boolean,
  lost: boolean,
  open: boolean,
  betSymbol: string,
  betCost: number,
  sumSymbol: string,
  sumOdds: number,
  cashout: string,
  bonus: string
) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = 7;
  else if (role === "Type5Admin") role_url = 5;
  else if (role === "Type3Admin") role_url = 3;

  //type
  let type = "";
  if (solo === true && multiple === true && system === true)
    type = "Solo,Multiple,System";
  else if (solo === true && multiple === true)
    type = "Solo,Multiple";
  else if (solo === true && system === true)
    type = "Solo,System";
  else if (multiple === true && system === true)
    type = "Multiple,System";
  else if (solo === true)
    type = "Solo";
  else if (multiple === true)
    type = "Multiple";
  else if (system === true)
    type = "System";

  //coupon type
  let coupon_type = "";
  if (pregame === true && live === true && mix === true)
    coupon_type = "Pregame,Live,Mix";
  else if (pregame === true && live === true)
    coupon_type = "Pregame,Live";
  else if (pregame === true && mix === true)
    coupon_type = "Pregame,Mix";
  else if (live === true && mix === true)
    coupon_type = "Live,Mix";
  else if (pregame === true)
    coupon_type = "Pregame";
  else if (live === true)
    coupon_type = "Live";
  else if (mix === true)
    coupon_type = "Mix";

  //status
  let status = "";
  if (won === true && lost === true && open === true)
    status = "Won,Lost,Open";
  else if (won === true && lost === true)
    status = "Won,Lost";
  else if (won === true && open === true)
    status = "Won,Open";
  else if (lost === true && open === true)
    status = "Lost,Open";
  else if (won === true)
    status = "Won";
  else if (lost === true)
    status = "Lost";
  else if (open === true)
    status = "Open";

  let API_ENDPOINT = "";
  if (id == "")
    API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/search/coupons?start_date=${start_date}&end_date=${end_date}&type=${type}&coupon_type=${coupon_type}&status=${status}&bet_sign=${betSymbol}bet_cost=${betCost}&odds_sign=${sumSymbol}&odds_sum=${sumOdds}&&cashout=${cashout}&bonus=${bonus}`;
  else
    API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/search/coupons?user_id=${id}&start_date=${start_date}&end_date=${end_date}&type=${type}&coupon_type=${coupon_type}&status=${status}&bet_sign=${betSymbol}bet_cost=${betCost}&odds_sign=${sumSymbol}&odds_sum=${sumOdds}&&cashout=${cashout}&bonus=${bonus}`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-ACCESS-TOKEN", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    return {
      status: response.status,
      data: data
    };
  } catch (err) {
    console.log(err);
  }
};

export const getFinalcialReports = async (
  token: string,
  role: string,
  id: number,
  start_date: string,
  end_date: string
) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = 7;
  else if (role === "Type5Admin") role_url = 5;
  else if (role === "Type3Admin") role_url = 3;

  const API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/search/funds?user_id=${id}&from_date=${start_date}&to_date=${end_date}`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-ACCESS-TOKEN", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    return {
      status: response.status,
      data: data
    };
  } catch (err) {
    console.log(err);
  }
};

export const getTransactions = async (
  token: string,
  role: string,
  action_user_id: number,
  action_user_name: string,
  target_user_id: number,
  target_user_name: string,
  start_date: string,
  end_date: string,
  type: string
) => {
  let role_url;
  if (role === "SuperAgent") role_url = "superagent";
  else if (role === "Type7Admin") role_url = 7;
  else if (role === "Type5Admin") role_url = 5;
  else if (role === "Type3Admin") role_url = 3;

  let API_ENDPOINT = "";
  if (type === "All")
    API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/search/logs?&from_date=${start_date}&to_date=${end_date}&target_user_id=${target_user_id}&target_user_username=${target_user_name}&action_user_id=${action_user_id}&action_user_username=${action_user_name}`;
  else
    API_ENDPOINT = env.SERVER_URL + `/admin/${role_url}/search/logs?&from_date=${start_date}&to_date=${end_date}&comment=${type}&target_user_id=${target_user_id}&target_user_username=${target_user_name}&action_user_id=${action_user_id}&action_user_username=${action_user_name}`;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("X-ACCESS-TOKEN", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    return {
      status: response.status,
      data: data
    };
  } catch (err) {
    console.log(err);
  }
};