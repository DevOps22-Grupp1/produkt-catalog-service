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
    price: 999.99,
    image:
      "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s10/galaxy-s10-prism-green.jpg",
  },
  {
    id: 2,
    order: "LG G8 ThinQ",
    price: 1499.99,
    image: "https://www.notebookcheck.se/uploads/tx_nbc2/LGG8ThinQ__2_.JPG",
  },
  {
    id: 3,
    order: "MSI GS65 Stealth Thin",
    price: 499.99,
    image:
      "https://m.media-amazon.com/images/I/51RkDgBwBWL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    order: "Bowers & Wilkins PX7",
    price: 799.99,
    image:
      "https://soundium.se/media/catalog/product/cache/8617f2469151d4da41dffdff872d6f94/1/6/1656585629_img_1783046_1.jpeg",
  },
  {
    id: 5,
    order: "Apple AirPods Pro",
    price: 699.99,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
  },
  {
    id: 6,
    order: "Air Jordan 1 Retro High OG",
    price: 2099.99,
    image:
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c73107-7997-4d09-8893-04158b0e7757/air-jordan-1-retro-high-og-shoes-lZQrDX.png",
    },
    {
        id: 7,
        order: "Nike Air Max 90",
        price: 1299.99,
        image: "https://static.nike.com/a/images/t_default/6a6b1d1e-1b7a-4b1e-8b1a-5b1b1d1b1b1e/air-max-90-shoe-2XjXqz.png",
    },
    {
        id: 8,
        order: "LG C2 65 OLED",
        price: 3999.99,
        image: "https://www.lg.com/se/images/tv/md07519296/gallery/medium01.jpg",
    },
    {
        id: 9,
        order: "Samsung QN90A Neo QLED",
        price: 4999.99,
        image: "https://www.samsung.com/se/tvs/qled-tv/highlights/images/qn90a-features-01.jpg",
    },
    {
        id: 10,
        order: "Sony XBR-65A9G",
        price: 5999.99,
        image: "https://www.sony.se/image/7b8b7f3b3b0d0b0d0b0d0b0d0b0d0b0d?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    },
    {
        id: 11,
        order: "RedBull",
        price: 19.99,
        image: "https://www.redbull.com/se-sv/energydrink/v3/resources/redbull.com/redbull.com-share-image.jpg",
    },
    {
        id: 12,
        order: "Monster",
        price: 14.99,
        image: "https://www.monsterenergy.com/media/uploads_image/2020/01/28/5e2f5b5c5c6a2_1000_1000.jpg",
    },
    {
        id: 13,
        order: "Celsius",
        price: 12.99,
        image: "https://www.celsius.se/wp-content/uploads/2019/10/celsius-heat-2.jpg",
    }

]);
