import express from 'express';

const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
  res.send({"status": "ok5"})
})

app.listen(PORT, () =>{
  console.log(`SERVER RUNNUNG`);
});
