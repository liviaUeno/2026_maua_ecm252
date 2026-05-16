const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/search", async (req, res) => {
  // localhost:3000/lembretes/:id/observacoes?letra=a&importante=sim
  // id é param de path >> req.params.id
  // letra=a&importante=sim é param de query >> req.query
  const pexelsClient = axios.create({
    baseURL: "https://api.pexels.com/v1",
    headers: {
      Authorization: "a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV",
    },
  });
  try {
    const result = await pexelsClient.get("/search", {
      params: {
        query: req.query.query,
      },
    });

    console.log(result.data);

    res.json(result.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro ao buscar imagens" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Back. ${port}.`);
});
