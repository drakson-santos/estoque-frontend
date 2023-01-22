import React, { useEffect, useState } from 'react';
import './styles.css';
import { TextField, FormControl, Select, InputLabel, MenuItem, Button } from '@mui/material';
import { getCategories, getModels, postProduct } from '../../controllers/product';

function ProductForm({ reloadPage, handleClose }) {
    const [formData, setFormData] = useState({
        productName: '',
        model: '',
        category: '',
        quantity: '',
        photo: null,
    });

    const [categories, setCategories] = useState([]);
    const [models, setModels] = useState([]);

    const handleChange = (event) => {
        if (event.target.name === 'photo') {
            setFormData({
                ...formData,
                [event.target.name]: event.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
            product_name: formData.productName,
            category: formData.category,
            model: formData.model,
            quantity: formData.quantity,
            photo: formData.photo,
        };
        postProduct(payload);
        reloadPage(true)
		handleClose()
    };

    const loadFormData = async () => {
        try {
            let res = await getCategories();
            setCategories(res.categories);
            res = await getModels();
            setModels(res.models);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadFormData();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <TextField
                className="product-form__input"
                label="Product Name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
            />
            <br />
            <FormControl className="product-form__select">
                <InputLabel id="model-select">Model</InputLabel>
                <Select labelId="model-select" name="model" value={formData.model} onChange={handleChange}>
                    {models.map((item, index) => (
                        <MenuItem key={index} value={item.id}>
                            {item.model_name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            <FormControl className="product-form__select">
                <InputLabel id="category-select">Category</InputLabel>
                <Select labelId="category-select" name="category" value={formData.category} onChange={handleChange}>
                    {categories.map((item, index) => (
                        <MenuItem key={index} value={item.id}>
                            {item.category_name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br />
            <TextField
                className="product-form__input"
                label="Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
            />
            <br />
            <FormControl>
                <input accept="image/*" id="contained-button-file" type="file" name="photo" onChange={handleChange} />
            </FormControl>
            <br />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
}

export default ProductForm;
