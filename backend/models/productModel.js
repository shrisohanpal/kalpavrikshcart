import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    category: {
        type: String
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    brand: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    gst: {
        type: Number,
        required: true,
        default: 0
    },
    finalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    returnable: {
        type: Boolean,
        default: false
    },
    refundable: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product