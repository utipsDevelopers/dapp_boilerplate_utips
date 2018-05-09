import {Meteor} from 'meteor/meteor';
import GenerationPlants from '../../lib/collections/generationPlants';

Meteor.methods({
  login: ({plantName, plantPw}) => {
    const user = GenerationPlants.findOne({name: plantName, password: plantPw})
    if (user){
      return user
    } else {
      throw new Meteor.Error("Error, invalid user :(")
    }
  }  
})
