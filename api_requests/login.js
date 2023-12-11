const axios = require("axios");
const { expect } = require("chai");
const data = require("./data/dummy_data.json");
const fs = require("fs-extra");

describe("Login & getting token", () => {
  //Get data
  it("Get user by ID", async () => {
    const getUser = await axios.get(`${data.baseUrl}/users/1`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    //console.log(getUser.data);
    userName = getUser.data.username;
    userPassword = getUser.data.password;
    expect(getUser.status).equal(200);
  });

  //Get auth token
  it("Receive auth token", async () => {
    const getToken = await axios.post(
      `${data.baseUrl}/auth/login`,
      {
        username: userName,
        password: userPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //console.log(getToken.data);
    token_value = getToken.data.token;
    data.token = token_value;
    fs.writeFileSync("api_requests/data/dummy_data.json", JSON.stringify(data));
  });
});