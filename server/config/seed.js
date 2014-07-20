/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Just One Person at a Time',
    info : 'Do you have the rational fear that the person whose heartfelt message melted your heart just mailed it to 50 other people? On Qonsider, everyone (including you!) can only message one, very special person every day.'
  }, {
    name : 'Get to Know The Love of Your Life',
    info : 'Sick of dating apps where you get to know the other person for about five seconds? On Qonsider, you have all day.'
  },  {
    name : 'A Dating App for Normal People',
    info : 'This is the kind of dating app made for people who are tired of spam. Spammers be gone!'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});