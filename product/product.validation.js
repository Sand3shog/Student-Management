import yup from 'yup';

const productValidationSchema = yup.object ({
        name: yup.string().required().max(150),
        price: yup.number().required().min(0),
        brand: yup.string().required().max(150),
        category: yup.string().required().oneOf(["Grocery", "Electronics", "Clothing", "Kitchen", "Kids"]),
        image: yup.string().notRequired(),
        quantity: yup.number().required().min(1, "Quantity must be at least 1"),
    });

export default productValidationSchema;