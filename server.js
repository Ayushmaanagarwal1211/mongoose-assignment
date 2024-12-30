const express = require('express');
const PORT = 5050;
const app = express();
app.use(express.json());

require("./mongoose_conn.js")

const booksRouter = require("./routes/books");

app.use("/books",booksRouter)

app.listen(PORT);
