import mongoose from 'mongoose'

const shopSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
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