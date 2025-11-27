export const getAllProducts = async () => {
  try {
  
    const res = await fetch("/public/data/products.json"); // Ruta del archivo JSON

    if (!res.ok) throw new Error("Response not ok");
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
