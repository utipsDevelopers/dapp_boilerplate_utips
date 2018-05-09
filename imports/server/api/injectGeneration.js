import {Picker} from 'meteor/meteorhacks:picker'

Picker.route('inject-generation', (params, request, response) => {
  console.log('body:', request.body)
}, {where: 'server'})
