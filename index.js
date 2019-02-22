const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

const project = require('./data/models/project-model');
const action = require('./data/models/action-model');

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.get('/api/projects', (req, res) => {
  project
    .get()
    .then(projects => res.status(200).json({ success: true, projects }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve projects. Please try again.'
      })
    );
});

server.get('/api/projects/:id', (req, res) => {
  const id = req.params.id;
  project
    .getById(id)
    .then(project => res.status(200).json({ success: true, project }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve project. Please try again.'
      })
    );
});

server.post('/api/projects', (req, res) => {
  const newProject = req.body;
  const { name, description } = req.body;

  if (!name || !description) {
    res
      .status(500)
      .json({ success: false, message: 'Name and description required.' });
  }

  project
    .add(newProject)
    .then(project => res.status(200).json({ success: true, project }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to add project. Please try again.'
      })
    );
});

server.get('/api/actions', (req, res) => {
  action
    .get()
    .then(actions => res.status(200).json({ success: true, actions }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve actions. Please try again.'
      })
    );
});

server.post('/api/actions', (req, res) => {
  const newAction = req.body;
  const { description, fk } = req.body;

  if (!description || !fk) {
    res
      .status(500)
      .json({ success: false, message: 'Name and description required.' });
  }

  action
    .add(newAction)
    .then(action => res.status(200).json({ success: true, action }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to add action. Please try again.'
      })
    );
});

server.listen(4000, () => {
  console.log('*** Server running on 4000 ***');
});
