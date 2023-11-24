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
        "id": 1,
        "order": "Samsung Galaxy S10",
        "price": 999.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS9tCPJnc-iiw3fMUCpq8eufGEP5rnOyE1A&usqp=CAU",
        "category": ["mobile"],
    },
    {
        "id": 2,
        "order": "LG G8 ThinQ",
        "price": 1499.99,
        "image": "https://dealy.com/se/472604-large_default/visa-skydd-lg-g8-thinq-mirror-och-konstlader.jpg",
        "category": ["mobile"],
    },
    {
        "id": 3,
        "order": "MSI GS65 Stealth Thin",
        "price": 499.99,
        "image": "https://www.pcworld.com/wp-content/uploads/2023/04/dsc04169_final-100796414-orig.jpg?quality=50&strip=all",
        "category": ["laptop"],
    },
    {
        "id": 4,
        "order": "Bowers & Wilkins PX7",
        "price": 799.99,
        "image": "https://5.imimg.com/data5/ECOM/Default/2022/9/AU/PY/VI/149548967/px7s2-blue-001-500x500.png",
        "category": ["headphones"],
    },
    {
        "id": 5,
        "order": "Apple AirPods Pro",
        "price": 699.99,
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
        "category": ["headphones"],
    },
    {
        "id": 6,
        "order": "Air Jordan 1 Retro High OG",
        "price": 2099.99,
        "image": "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e7c73107-7997-4d09-8893-04158b0e7757/air-jordan-1-retro-high-og-shoes-lZQrDX.png",
        "category": ["shoes"],
    },
    {
        "id": 7,
        "order": "Nike Air Max 90",
        "price": 1299.99,
        "image": "https://de.kicksmaniac.com/zdjecia/2019/02/20/302/26/NIKE_AIR_MAX_90_ESSENTIAL_WOLF_GREY-mini.jpg",
        "category": ["shoes"],
    },
    {
        "id": 8,
        "order": "LG C2 65 OLED",
        "price": 3999.99,
        "image": "https://www.lg.com/se/images/TV/features/OLED2022/OLEDC2/TV-OLED-C2-02-intro-Mobile-v2.jpg",
        "category": ["tv"],
    },
    {
        "id": 9,
        "order": "Samsung QN90A Neo QLED",
        "price": 4999.99,
        "image": "https://reviewed-com-res.cloudinary.com/image/fetch/s--df1p37wd--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1616592529737/Samsung-QN90A-8.jpg",
        "category": ["tv"],
    },
    {
        "id": 10,
        "order": "Sony XBR-65A9G",
        "price": 5999.99,
        "image": "https://m.media-amazon.com/images/I/61baGFdOXfL._AC_UF1000,1000_QL80_.jpg",
        "category": ["tv"],
    },
    {
        "id": 11,
        "order": "RedBull",
        "price": 19.99,
        "image": "https://media.istockphoto.com/id/458735615/sv/foto/red-bull-can-in-ice.jpg?s=612x612&w=0&k=20&c=HmCogPnrPjsHW1g93HQs59p_uru_hBXK8D04DnaC3OM=",
        "category": ["drinks"],
    },
    {
        "id": 12,
        "order": "Monster",
        "price": 14.99,
        "image": "https://web-assests.monsterenergy.com/mnst/7649c44a-aba5-49d6-860d-5156833adc86.png",
        "category": ["drinks"],
    },
    {
        "id": 13,
        "order": "Celsius",
        "price": 12.99,
        "image": "https://m.media-amazon.com/images/I/8188PGnPg0L.jpg",
        "category": ["drinks"],
    },
    {
        "id": 14,
        "order": "Great Northern Popcorn Popcornmaskin Little Bambino",
        "price": 14.99,
        "image": "https://www.hembiobutiken.se/images/prod/192760_2.jpg",
        "category": ["food-machine"],
    },
    {
        "id": 15,
        "order": "Epson EH-TW9400",
        "price": 2699.99,
        "image": "https://actsessory.files.wordpress.com/2021/12/file3lysgbl6-copy.jpg?w=670&h=413",
        "category": ["projetor"],
    },
    {
        "id": 16,
        "order": "Triangle Antal 40th Anniversary",
        "price": 3599.99,
        "image": "https://www.hificine.com/wp-content/uploads/2022/10/triangle-antal-40th.jpg",
        "category": ["sound"],
    },
    {
        "id": 17,
        "order": "Devialet Dione Opéra de Paris",
        "price": 3190.99,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQree3S76keglE8JsDkBWDJZHEiZG7Uq6ULyg&usqp=CAU",
        "category": ["sound"],
    },
    {
        "id": 18,
        "order": "OnePlus Open",
        "price": 1499.99,
        "image": "https://image01.oneplus.net/ebp/202310/09/1-m00-47-77-ckvlh2ujwe2atshtaale9r-nxtm963.png?x-amz-process=image/format",
        "category": ["mobile"],
    },
    {
        "id": 19,
        "order": "Wacom Intuos M",
        "price": 178.54,
        "image": "https://cdn.inet.se/product/688x386/6611408_7.png",
        "category": ["tablet"],
    },
]);
