import { Router } from 'express';
import pingRouter from './ping';
import projectRouter from './project';
import fileRouter from './file';

const router = Router();

router.use('/', pingRouter);
router.use('/projects', projectRouter);
router.use('/files', fileRouter);

export default router;
