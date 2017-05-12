/**
 * CartController
 *
 * @description :: Server-side logic for managing Carts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  addProduct: async function(req, res){
    const {productID} = req.body
    const cart = await cartSerializer.getCartByUserID(req.session.id)
    cart.products.push(productID)
    cart.save()
    return res.json(cart)
  },
  removeProduct: async function(req, res){
    const {productID} = req.body
    const cart = await cartSerializer.getCartByUserID(req.session.id)
    cart.products = cart.products.filter(item => item !== productID)
    cart.save()
    return res.json(cart)
  },
  pay: async function(req, res){
    const cart = await cartSerializer.getCartByUserID(req.session.id)
    cart.paidFor = true
    cart.save()
    return res.json(cart)
  },
};

