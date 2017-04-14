/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ProductController.index()`
   */
  index: function (req, res) {
    Product.find()
    .then(products => {
      return res.json(products)
    })
    .catch(err => res.negotiate(err))
  },


  /**
   * `ProductController.show()`
   */
  show: function (req, res) {
    const {id} = req.params
    Product.findOne(id)
    .then(product => {
      return res.json(product)
    })
    .catch(err => res.negotiate(err))
  },


  /**
   * `ProductController.create()`
   */
  create: function (req, res) {
    const {title, price, available, discount} = req.body
    Product.create({title, price, available, discount})
    .then(product => {
      return res.json(product)
    })
    .catch(err => res.negotiate(err))
  },


  /**
   * `ProductController.update()`
   */
  update: function (req, res) {
    const {title, price, available, discount} = req.body
    const {id} = req.params

    Product.update(id, {title, price, available, discount})
    .then(product => {
      return res.json(product)
    })
    .catch(err => res.negotiate(err))
  },


  /**
   * `ProductController.delete()`
   */
  delete: function (req, res) {
    const {id} = req.params

    Product.destroy(id)
    .then(product => {
      return res.json(product)
    })
    .catch(err => res.negotiate(err))
  }
};

