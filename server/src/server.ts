import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World from API!' });
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
