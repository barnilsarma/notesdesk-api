import express from "express";
import * as controllers from "./src/controllers/index.js";
import * as middlewares from "./src/middlewares/index.js";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());

//
dotenv.config();
app.use(cors({ origin: `${process.env.FRONTEND_URL}`, credentials: true }));
app.use(bodyParser.json({ limit: '10mb' })); // For JSON requests
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (req, res) => {
    res.status(200).send("Hello world");
});

app.post('/library/add', middlewares.validateLibrary, controllers.library.create);
app.get('/library/read', controllers.library.read);
app.put('/library/update/:id', controllers.library.update);
app.put('/library/delete/:id', controllers.library.deleteLib);
//
app.post('/subject/add', middlewares.validateSubject, controllers.subject.create);
app.get('/subject/read/:libraryId', controllers.subject.read);
app.put('/subject/update/:id', controllers.subject.update);
app.put('/subject/delete/:id', controllers.subject.deleteSub);
//
app.post('/chapter/add', middlewares.validateChapter, controllers.chapter.create);
app.get('/chapter/read/:subjectId', controllers.chapter.read);
app.put('/chapter/update/:id', controllers.chapter.update);
app.put('/chapter/delete/:id', controllers.chapter.deleteChap);

app.post('/page/add', controllers.page.create);
app.get('/page/read/:chapterId', controllers.page.read);
app.put('/page/update/:id', controllers.page.update);
app.put('/page/delete/:id', controllers.page.del);
app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});