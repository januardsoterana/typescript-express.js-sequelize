import { Router } from 'express';

import * as controller from '../controllers/file';

const router = Router();

router.route('/upload').post(controller.upload);
router.route('/:id/download').post(controller.download_by_id);

export default router;
