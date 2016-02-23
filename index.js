'use strict';

const newrelic = require('newrelic');

function* middleware(next) {
  try {
    yield next;
  } catch (err) {
    newrelic.noticeError(err);
    throw err;
  } finally {
    newrelic.setControllerName(
      this._matchedRoute,
      this.method
    );
  }
}

module.exports = middleware;
