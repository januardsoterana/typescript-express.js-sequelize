import { Router } from 'express';

import * as controller from '../controllers/project';

const router = Router();

router.route('/').get(controller.project_info_list);
router.route('/:id').get(controller.project_info_by_pk);
router.route('/:id/weather').get(controller.weather_info);

export default router;
