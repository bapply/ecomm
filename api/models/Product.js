/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: "string",
      required: true
    },
    price: {
      type: "float",
      required: true,
    },
    available: {
      type: "integer",
      defaultsTo: 0,
    },
    discount: {
      type: "int",
      defaultsTo: false
    },
    media: {
      collection: "media"
    }
  }
};

