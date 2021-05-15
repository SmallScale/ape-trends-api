import * as express from "express";
import getApeTrends from "ape-trends";

const app = express();

app.get("/", async (request, response) => {
  const apeTrends = await getApeTrends({ limits: { depth: "25%" } });
  response.header("Access-Control-Allow-Origin", "*");
  response.send(apeTrends);
});

app.listen(process.env.PORT ?? 5000);
