import {Meteor} from 'meteor/meteor'
import random from 'lodash/random'

const generatorPlants = [
  {
    name: 'EcoGener',
    id: 'Wu9U7WTdVw6eH97F',
    capacity: '5'
  },
  {
    name: 'ElectricGreen',
    id: 'W7hs967hGeYN8JAw',
    capacity: '2'
  },
  {
    name: 'SunGenCo',
    id: 'a47i7esip48KfUGd',
    capacity: '10'
  }
]

var generationsTracker = []

export default () => {
  const index = random(0, generatorPlants.length - 1)
  const data = Object.assign({}, generatorPlants[index])
  data.kwProduced = random(1, generatorPlants[index].capacity)
  data.generatedAt = new Date()
  Meteor.call('injectGeneration', data, (error, response) => {
    if (error) {
      console.log('Error calling method "injectGeneration":', error)
    } else {
      generationsTracker.push(data)
      if (generationsTracker.length === 5) {
        console.log('Generating new block...')
        Meteor.call('generateBlock', generationsTracker, (error, response) => {
          if (error) {
            console.log('Error calling method "generateBlock":', error)
          } else {
            generationsTracker = []
            console.log('Created new block with hash:', response)
          }
        })
      }
    }
  })
}
