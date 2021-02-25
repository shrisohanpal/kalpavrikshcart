import mongoose from 'mongoose'

const shopSchema = mongoose.Schema(
    {
        /*  user: {
              type: mongoose.Schema.Types.ObjectId,
              required: true,
              ref: 'User',
          },*/
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        category: {
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