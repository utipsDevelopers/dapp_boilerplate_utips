import {Meteor} from 'meteor/meteor'
import Generations from '../../lib/collections/generations'
import Blocks from '../../lib/collections/blocks'

Meteor.methods({
  injectGeneration: (data) => {
    console.log('Injecting data:', data)
    const generationId = Generations.insert(data)
    return generationId
  },
  generateBlock: (generationsTracker) => {
    const allBlocks = Blocks.find().fetch()
    const block = Object.assign({}, {generations: generationsTracker})
    block.createdAt = new Date()
    block.previousBlockId = allBlocks && allBlocks.length ? allBlocks[allBlocks.length - 1]._id : ''
    block.chainIndex = allBlocks && allBlocks.length ? allBlocks.length : 0
    const blockId =  Blocks.insert(block)
    return blockId
  },
  getBlockChain: () => Blocks.find.fetch(),
  getBlockByHash: (hash) => Blocks.findOne(hash),
  getGenerationByIndex: (hash, index) => Blocks.findOne(hash).generations[index]
})
