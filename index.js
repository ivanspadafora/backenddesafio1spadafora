class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    const codeExists = this.products.some(p => p.code === product.code);

        if (codeExists) {
        console.error('El código ya existe');
        return;
        }

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error("Todos los campos son obligatorios.");
        return;
        }

        const newProduct = {
        ...product,
        id: this.nextId,
        };

        this.nextId++;

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);

        if (!product) {
        console.error('Producto no encontrado');
        return null;
        }
    
        return product;
    }
}

const productManager = new ProductManager();

productManager.addProduct({
  title: "Coca Cola",
  description: "Bebida de cola",
  price: 2.5,
  thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fjugo-sabor-cola-coca&psig=AOvVaw3vtuINeT06gvIUek6_xVGY&ust=1693678119313000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKCPoeeAioEDFQAAAAAdAAAAABAE",
  code: "beb1",
  stock: 100
});

productManager.addProduct({
  title: "Fanta",
  description: "Bebida de naranja",
  price: 2.0,
  thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.unbaratugusto.com%2Fproductos%2Ffanta-naranja-descartable-225-lts-x6%2F&psig=AOvVaw2MkCWhmUGw8MvFC6DCGRCk&ust=1693678152099000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJiM5faAioEDFQAAAAAdAAAAABAE",
  code: "beb2",
  stock: 75
});

productManager.addProduct({
  title: "Sprite",
  description: "Bebida de lima-limón",
  price: 2.0,
  thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbeermarket.com.ar%2Fproducto%2Fsprite-pet-1-5-lt%2F&psig=AOvVaw0hi0HTsZG3RjUZ4aDip9X5&ust=1693678169987000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiqq_-AioEDFQAAAAAdAAAAABAE",
  code: "beb3",
  stock: 80
});

const products = productManager.getProducts();
console.log("Lista de productos:");
console.log(products);

module.exports = ProductManager;