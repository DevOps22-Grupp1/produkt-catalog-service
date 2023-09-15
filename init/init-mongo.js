db.createUser({
    user: "sudo_admin",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "allProducts",
        },
    ],
});


db.createCollection("products");
db.products.insertMany([
    {
        id: 1,
        order: "Samsung Galaxy S10",
        price: 999.99
    },
    {
        id: 2,
        order: "LG G8 ThinQ",
        price: 1499.99
    },
    {
        id: 3,
        order: "MSI GS65 Stealth Thin",
        price: 499.99
    },
    {
        id: 4,
        order: "Bowers & Wilkins PX7",
        price: 799.99
    },
    {
        id: 5,
        order: "Apple AirPods Pro",
        price: 699.99
    },
    {
        id: 6,
        order: "Air Jordan 1 Retro High OG",
        price: 2099.99
    }
]);
