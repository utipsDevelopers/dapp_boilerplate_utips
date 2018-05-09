import { Meteor } from 'meteor/meteor';
import '../../lib'
import '../../server'
import injector from '../../mocks/generations'

Meteor.startup(() => {
  Meteor.setInterval(injector, 5000)
})
