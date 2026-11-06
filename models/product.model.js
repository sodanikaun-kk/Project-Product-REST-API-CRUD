import mongoose from "mongoose";

const productSchema = new mongoose.Schema ({
    name : {
        type: String,
        require: true,
    },
    price : {
        type: Number,
        require:true,
        min:0
    },
    category : {
        type: String,
        require: true,
    },
    description :String,
    qty:{
        type:Number,
        require:true,
        min:0
    },
    isActive :{
        type: Boolean,
        default: true,
    },
},
{
    timestamps:true
}
)
const Product = mongoose.model ('Products',productSchema);

export default Product;