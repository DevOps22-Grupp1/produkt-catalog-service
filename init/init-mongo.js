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


db.createCollection("orders");
db.orders.insertMany([
    {
        order: "Samsung Galaxy S10",
        price: 999.99
    },
    {
        order: "LG G8 ThinQ",
        price: 1499.99
    },
    {
        order: "MSI GS65 Stealth Thin",
        price: 499.99
    },
    {
        order: "Bowers & Wilkins PX7",
        price: 799.99
    },
    {
        order: "Apple AirPods Pro",
        price: 699.99
    },
    {
        order: "Air Jordan 1 Retro High OG",
        price: 2099.99
    }
]);
