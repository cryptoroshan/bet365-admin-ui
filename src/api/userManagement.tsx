import * as env from "@/app/env";

export const getUsersCreatedBy = async (id:number) => {
    const API_ENDPOINT = env.SERVER_URL + "/admin/superagent/users/createdBy/" + id;
    const myHeaders = new Headers();
    myHeaders.append("X-ACCESS-TOKEN", env.TOKEN);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    };

    try{
        const response = await fetch(API_ENDPOINT, requestOptions);
        const data = await response.json();
        return data;
    }catch (err){
        console.log(err)

    }

};
