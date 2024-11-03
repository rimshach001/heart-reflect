
export const signup = async (name, email, password) => {
    let response = await fetch('http://localhost:5000/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    response = await response.json()
    console.warn(response)
    return response;
};

export const signin = async (email, password) => {
    try {
        let response = await fetch('http://localhost:5000/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        response = await response.json();
        console.warn(response);
        return response;
    } catch (error) {
        console.error('Error during signin:', error);
        throw error;
    }
};

export const addProducts = async (formData) => {
    let response = await fetch('http://localhost:5000/add-product', {
        method: 'POST',
        body: formData,
    });
    response = await response.json()
    console.warn(response)
    return response;
};
export const allProducts = async () => {
    try {
        let response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  // Handle non-200 responses
        }
        const data = await response.json();
        console.warn(data);
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;  // Rethrow the error to be handled in the calling function
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`http://localhost:5000/products/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.warn(data);
        return data; // This may return a success message or the deleted product info
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};


export const updateProduct = async (id, updatedData) => {
    try {
        let response = await fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Product updated successfully:', data);
        return data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const searchProducts = async (query) => {
    try {
        let response = await fetch(`http://localhost:5000/products/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle non-200 responses
        }
        const data = await response.json();
        console.warn('Search results:', data);
        return data;
    } catch (error) {
        console.error('Error searching products:', error);
        throw error; // Rethrow the error to be handled in the calling function
    }
};
