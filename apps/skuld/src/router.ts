import express from 'express';
import TaskController from './controllers/task.controller';

const router = express.Router();

router.get('/tasks', async (_req, res) => {
  const response = await TaskController.tasks();
  res.send(response);
});

router.post('/tasks/add', async (req, res) => {
  const response = await TaskController.addTasks(req.body);
  res.send(response);
});

export default router;
