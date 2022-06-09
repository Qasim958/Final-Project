export async function getApiData(url, data) {
  try {
    let response;
    if (data) {
      response = await fetch(url, {
        method: "POST",
//         mode:"no-cors",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify(data),
      });
    } else {
      response = await fetch(url, {
        method: "POST",
//          mode:"no-cors",
      });
    }

    return response.status === 200 ? await response.json() : false;
  } catch (error) {
    console.error("Check internet connection!!!");
  }
}
