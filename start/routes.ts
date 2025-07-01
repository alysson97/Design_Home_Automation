/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const DeviceController = () => import('#controllers/device.controller');

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.post('/devices/:id/action', [DeviceController, 'execute']);
