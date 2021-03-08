import mongoose from 'mongoose'

const shopSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        category: {
            type: String,
        },
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        address: {
            type: String,
        },
        aadharNumber: {
            type: String
        },
        panNumber: {
            type: String
        },
        gstNumber: {
            type: String
        },
        phone: {
            type: String
        },
        email: {
            type: String
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

const Shop = mongoose.model('Shop', shopSchema)

export default Shop