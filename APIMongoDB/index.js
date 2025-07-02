let express = require('express');
let mongoose = require('mongoose');
let app = express();

app.use(express.json());

const PORT = 3000;

mongoose
    .connect("mongodb://localhost:27017/Avi")
    .then(() => console.log("Mongo Database Connected"))
    .catch((err) => console.log("Error in Connection !"));


//---------------------------------------------------------

app.get("/", (req, res) => {
    res.send("<H1> Hello World!! <H1>");
})


//DEFINING SCHEMA
const ProductScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter the Product Name: "]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

// Register Model
const Product = mongoose.model("Product", ProductScheme);



//find all
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({msg : error.msg});
        
    }
})


//find one vai id
app.get("/api/products/:id", async (req, res) => {
    try {
        let id = req.params.id;
        if(!id){
            return res.status(404).json({msg : "Product ID is required"});
        }
        else{
            const products = await Product.find({_id : id});
            res.status(200).json(products);
        }

    } catch (error) {
        res.status(500).json({msg : error.msg});
        
    }
})


//update 
app.put("/api/products/:id", async (req, res) => {
    try {
        let id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({msg : "Product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }     
    catch (error) {
        res.status(500).json({msg : error.msg});
        
    }
});


app.delete("/api/products/:id", async (req, res) => {
    try {
        let id = req.params.id;
        if(!id){
            return res.status(404).json({msg : "Product ID is required"});
        }
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({msg : "Product not found"});
        }
        res.status(200).json({msg : "Product deleted successfully"});
        
    } catch (error) {
        res.status(500).json({msg : error.msg});
        
    }
})




//create a product
app.post("/api/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({msg : error.msg});
        
    }
});

//---------------------------------------------------------

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`)
})