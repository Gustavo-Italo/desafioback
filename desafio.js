
class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; 
    }

    // aqui adiciona um produto
    addProduct({ title, description, price, thumbnail, code, stock }) {
        // validação de preencheção obrigatórios
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.error("Todos os campos são obrigatórios.");
            return;
        }

        // validação se o produto já existe
        if (this.products.some(product => product.code === code)) {
            console.error(`O código "${code}" já existe.`);
            return;
        }

        // adiciona produto ao array
        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        console.log("Produto adicionado com sucesso:", newProduct);
    }

    // busca o produto pelo o id
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error("Não encontrado.");
            return;
        }
        return product;
    }
}


const manager = new ProductManager();

// adicionando produtos
manager.addProduct({
    title: "Produto 1",
    descriçãp: "Um ótimo produto",
    preço: 100,
    code: "PROD1",
    estoque: 20
});

manager.addProduct({
    title: "Produto 2",
    descrição: "Outro excelente produto",
    preço: 200,
    code: "PROD2",
    estoque: 15
});

manager.addProduct({
    title: "Produto 3",
    descrição: "Mais um produto incrível",
    preço: 300,
    code: "PROD3",
    estoque: 10
});

// exibe todos os produtos
console.log("Todos os produtos:", manager.products);

// exibe o produto pelo id
console.log("Produto com ID 1:", manager.getProductById(1));
console.log("Produto com ID 3:", manager.getProductById(3));

// tentando buscar um produto que não existe
console.log("Produto com ID 10:", manager.getProductById(10));

