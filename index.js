'use strict';

const newrelic = require('newrelic');

function* middleware(next) {
  try {
    yield next;
  } catch (err) {
    newrelic.noticeError(err);
    throw err;
  } finally {
    newrelic.setTransactionName(this._matchedRoute);
  }
}

module.exports = middleware;
