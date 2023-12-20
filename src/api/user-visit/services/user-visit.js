'use strict';

/**
 * user-visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-visit.user-visit');
