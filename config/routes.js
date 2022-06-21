/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /api/': {
    action: 'home'
  },
  'POST /api/user/register': {
    action: 'user/register'
  },
  'POST /api/user/login': {
    action: 'user/login'
  },
  'POST /api/user/logout': {
    action: 'user/logout'
  },
  'GET /api/tasks': {
    action: 'tasks/get-tasks'
  },
  'POST /api/task': {
    action: 'tasks/post-task'
  },
  'GET /api/task/:id': {
    action: 'tasks/get-task'
  },
  'PATCH /api/task/:id': {
    action: 'tasks/patch-task'
  },
  'DELETE /api/task/:id': {
    action: 'tasks/delete-task'
  }
};
