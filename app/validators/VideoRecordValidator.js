export default {
  properties: {
    title: {
      type: 'string',
      maxLength: 150,
      required: true
    },
    thumbnailUrl: {
      type: 'string',
      maxLength: 500,
      required: true,
      format: 'url',
      pattern: '@(https?)://(-\.)?([^\s/?\.#-]+\.?)+(/[^\s]*)?$@iS'
    },
    snapshotUrl: {
      type: 'string',
      maxLength: 500,
      required: true,
      format: 'url',
      pattern: '@(https?)://(-\.)?([^\s/?\.#-]+\.?)+(/[^\s]*)?$@iS'
    },
    description: {
      type: 'string',
      required: true
    },    
  }
}