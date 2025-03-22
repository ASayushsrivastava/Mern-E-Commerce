// creating the category structure
// also using slugify to wrap the white space
//  it helps in SEO as it converts the /category/product -> /category-product

import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type: String,
        lowercase:true
    }

}) 

export default mongoose.model('Category', categorySchema)