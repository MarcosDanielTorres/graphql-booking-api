import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port: ${port}.`);
});