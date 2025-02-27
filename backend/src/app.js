import path from 'path';
import logger from 'morgan';
import express from 'express';
import tagsRouter from './routes/tags.js';
import createError from 'http-errors';
import indexRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import projectsRouter from './routes/projects.js';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url); // Get the current file's full path
const __dirname = path.dirname(__filename); // Get the directory name of the current file

const app = express();

app.use('/', indexRouter);
app.use('/tags', tagsRouter);
app.use('/projects', projectsRouter);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
