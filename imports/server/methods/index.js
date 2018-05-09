import {Meteor} from 'meteor/meteor'
import rp from 'request-promise'

const apiUrl = 'http://localhost:8080/v1/'

// Waller addresses
const wallet1 = {
  address: 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y',
  publicKey: '031a6c6fbbdf02ca351745fa86b9ba5a9452d785ac4f7fc2b7548ca2a46c4fcf4a',
  WIF: 'KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr',
  privateKey: '1dd37fba80fec4e6a6f13fd708d8dcb3b29def768017052f6c930fa1c5d90bbb'
}
const wallet2 = {
  address: 'APLJBPhtRg2XLhtpxEHd6aRNL7YSLGH2ZL',
  publicKey: '036245f426b4522e8a2901be6ccc1f71e37dc376726cc6665d80c5997e240568fb',
  WIF: 'L56SWKLsdynnXTHScMdNjsJRgbtqcf9p5TUgSAHq242L2yD8NyrA'
}

Meteor.methods({
  'getLastTransaction': async () => {
    const status = await rp(`${apiUrl}status`)
    return {status}
  },
  'transferToken': async (senderAddress, receiverAddress, neoQuantity, gasQuantity) => {
    const response = await rp(`${apiUrl}`)
  },
  'getNotificationsByAddress': async (address) => {
    const response = await rp(`${apiUrl}notifications/addr/${wallet1.address}`)
    return response
  }
})
