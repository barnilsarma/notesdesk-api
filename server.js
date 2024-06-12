import express from "express";
import * as controllers from "./src/controllers/index.js";
import * as middlewares from "./src/middlewares/index.js";                                     
import dotenv from 'dotenv';
import passport from "passport";
import session from "express-session";
import userRoutes from "./src/routes/user.js"
import authRoutes from "./src/routes/auth.js"
import './src/config/passport.js'

const app = express();
app.use(express.json());
//
dotenv.config();

app.post('/library/add', middlewares.validateLibrary, controllers.library.create);
app.get('/library/read', controllers.library.read);
app.put('/library/update/:id', controllers.library.update);
app.put('/library/delete/:id', controllers.library.deleteLib);
//
app.post('/subject/add',middlewares.validateSubject,  controllers.subject.create);
app.get('/subject/read/:libraryId', controllers.subject.read);
app.put('/subject/update/:id', controllers.subject.update);
app.put('/subject/delete/:id', controllers.subject.deleteSub);
//
app.post('/chapter/add',middlewares.validateChapter, controllers.chapter.create);
app.get('/chapter/read/:subjectId', controllers.chapter.read);
app.put('/chapter/update/:id', controllers.chapter.update);
app.put('/chapter/delete/:id', controllers.chapter.deleteChap);

//aouth
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("Hello world");
});