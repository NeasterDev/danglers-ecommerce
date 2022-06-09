const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());


app.listen(() => {
    console.log(`Listening on ${PORT}`);
})