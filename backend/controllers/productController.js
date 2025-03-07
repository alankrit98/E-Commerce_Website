

//function for add product
const addProducts = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

        console.log(name, description, price, category, subCategory, sizes, bestseller)
        console.log(images)

        res.json({})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

//function for list products
const listProducts = async (req, res) => {


}

//function for removing product
const removeProduct = async (req, res) => {


}

//function for single product info
const singleProduct = async (req, res) => {


}

export { addProducts, listProducts, removeProduct, singleProduct }