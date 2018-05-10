import {Meteor} from 'meteor/meteor'
import Generations from '../../lib/collections/generations'
import Blocks from '../../lib/collections/blocks'
import PurchaseOrders from '../../lib/collections/purchaseOrders'
import computeAvalableCapacity from '../../lib/blockUtils/computeAvailableCapacity'

Meteor.methods({
  injectGeneration: (data) => {
    console.log('Injecting data:', data)
    const generationId = Generations.insert(data)
    return generationId
  },
  insertPurchaseOrder: (orderData) => {
    console.log('Inserting purchase order')
    const orderId = PurchaseOrders.insert(orderData)
    return orderId
  },
  generateBlock: (generationsTracker, purchaseOrdersTracker) => {
    console.log('Generating new block...')
    const allBlocks = Blocks.find().fetch()
    const block = Object.assign({}, {generations: generationsTracker, purchaseOrders: purchaseOrdersTracker})
    block.createdAt = new Date()
    block.previousBlockId = allBlocks && allBlocks.length ? allBlocks[allBlocks.length - 1]._id : ''
    block.chainIndex = allBlocks && allBlocks.length ? allBlocks.length : 0
    const blockId =  Blocks.insert(block)
    return blockId
  },
  getBlockChain: () => Blocks.find.fetch(),
  getBlockByHash: (hash) => Blocks.findOne(hash),
  getGenerationByIndex: (hash, index) => Blocks.findOne(hash).generations[index],
  getGerationsByGenerator: (generatorName, purchasesTracker) => Generations.find({name: generatorName}).fetch()
})
