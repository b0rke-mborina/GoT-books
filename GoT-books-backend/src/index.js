import express from "express";
import cors from "cors";
import books from "./storage.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/knjige', (req, res) => {
	res.send(books);
});

app.get('/knjige/:id', (req, res) => {
	let Id = req.params.id;
	let book = books.filter(book => book.id == Id);
	res.send(book);
});

app.listen(port, () => console.log(`Listening on port ${port}!`))