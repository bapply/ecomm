module.exports = {
  getCarts: async function(query){
    
    return await Cart.find(query)
  },
  getCartByUserID: async function(userID){
    carts = Cart.find({user: userID}).populate('products')
    if (carts.length > 0) {
      return carts[0]
    }
    else{
      const cart = await Cart.create({userID})
      return await Cart.findOne(cart.id).populate('products')
    }
  }
}