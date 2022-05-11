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

test("failed login", async () => {
  await api
    .post("/api/user/")
    .send({
      email: "prueba1@gmail.com",
      password: "123456789",
    })
    .expect(400)
    .expect("Content-Type", /application\/json/)
    .then(async (response) => await expect(response.body));
});

test("Register favs", async () => {
  const response = await api.post("/api/user/").send({
    email: "prueba1@gmail.com",
    password: "123456789",
  });

  const token = response != "" ? response.text.split(":")[1].slice(1, -2) : "";
  if (token != "") {
    await api
      .post("/api/favs/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "stevia",
        favs: [
          {
            title: "fav 1",
            description: "descripción 1",
            link: "estoesunlink",
          },
        ],
      })

      .expect(200)
      .expect("Content-Type", /json/);
  }
});

test("get favs", async () => {
  const response = await api.post("/api/user/").send({
    email: "prueba1@gmail.com",
    password: "123456789",
  });

  const token = response != "" ? response.text.split(":")[1].slice(1, -2) : "";
  if (token != "") {
    api
      .get("/api/favs/")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);
  }
});

test("find favs", async () => {
  const response = await api.post("/api/user/").send({
    email: "prueba1@gmail.com",
    password: "123456789",
  });

  const token = response != "" ? response.text.split(":")[1].slice(1, -2) : "";
  if (token != "") {
    api
      .post("/api/favs/626a27cd1e725b3b2b8ed7fc")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);
  }
});

test("delete favs", async () => {
  const response = await api.post("/api/user/").send({
    email: "prueba1@gmail.com",
    password: "123456789",
  });

  const token = response != "" ? response.text.split(":")[1].slice(1, -2) : "";
  if (token != "") {
    api
      .delete("/api/favs/626a27cd1e725b3b2b8ed7fc")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect("Content-Type", /json/);
  }
});
