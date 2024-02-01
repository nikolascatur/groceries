'use strict';

/**
 * product-popular service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-popular.product-popular');
