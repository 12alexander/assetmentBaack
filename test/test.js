const supertest = require("supertest");
const app = require("../index");
const api = supertest(app);

test("Register user successful", async () => {
  await api
    .post("/api/user/register")
    .send({
      email: "prueba1@gmail.com",
      password: "123456789",
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("logged in user", async () => {
  await api
    .post("/api/user/")
    .send({
      email: "prueba1@gmail.com",
      password: "123456789",
    })
    .expect(200)
    .expect("Content-Type", /application\/json/)
    .then(async (response) => await expect(response.body));
});
