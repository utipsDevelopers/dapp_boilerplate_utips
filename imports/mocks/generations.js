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
var purchaseOrdersTracker = []

export default () => {
  const index = random(0, generatorPlants.length - 1)
  const data = Object.assign({}, generatorPlants[index])
  data.kwProduced = random(1, generatorPlants[index].capacity)
  data.generatedAt = new Date()
  data.price = random(50, 100)
  Meteor.call('injectGeneration', data, (error, response) => {
    if (error) {
      console.log('Error calling method "injectGeneration":', error)
    } else {
      generationsTracker.push(data.generation)
      purchasesOrdersTracker.push(data.purchase)
      Meteor.setInterval(() => Meteor.call('generateBlock', generationTracker, purchasesOrdersTracker), 1000 * 60, (error, data) => {
        if (error) {
          console.log('Error calling method "generateBlock":', error)
        } else {
          generationsTracker = []
          purchasesOrdersTracker = []
          console.log('Created new block with hash:', response)
        }
      })
    }
  })
}
