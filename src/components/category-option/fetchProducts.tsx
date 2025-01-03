export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/category'); // API endpoint

      console.log('API Response:', response); // Check the response status
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      const data = await response.json();
      console.log('Fetched Data:', data); // Log the fetched data
  
      return data;
    } catch (error) {
      console.error('Error fetching products:', error); // Log any errors
      return []; // Return an empty array in case of error
    }
  }
  