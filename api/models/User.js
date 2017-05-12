module.exports = {
    attributes: {
        username: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        carts: {
            collection: 'cart'
        }
    }
}