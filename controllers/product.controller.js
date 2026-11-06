import Product from "../models/product.model.js";


export const createProduct = async (req, res) => {
    try {
        const result = await Product.create(req.body);
        return res.status(201).json({
            message : 'Product is create!',
            result,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:error.message,
        });
    }};
export const getAllProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await Product.find();
        res.status(200).json({
            result,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
} 
export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Product.findById(id);

        if (!result) {
            return res.status(404).json({
                error: 'Product not found'
            });
        }

        res.status(200).json({
            result,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: error.message
        });
    }
};
export const updateProduct = async (req, res) => {
        try{
            const {id} = req.params;
            const result = await Product.findOneAndUpdate(id, req.body, {new:true});
            if (!result){
            return res.status(404).json ({
                error : 'Product deos not exist'
            });
        }
        res.status(200).json({
            result,
        });
    } catch (error){
        console.log(error)
        res.status(500).json({
            error :error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
        try{
            const {id} = req.params;
            const result = await res.findOneAndDelete(id);
            if (!result) {
           return res.status(404).json({
            error:'Product does not exist'
        });
        } 
    
        res.status(200).json({
            result,
        })
            
    } catch (error){
        console.log(error)
        res.status(500).json({
            error :error.message
        })
    }
}
 