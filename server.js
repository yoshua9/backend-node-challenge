const express = require('express');

const app = express();
const port = process.env.PORT || 5004;

app.get('/api/phones', (request, response) => {
    let phones = [
        {
            id: 1,
            title: 'Apple iPhone 7 32 GB',
            description: 'Pantalla LCD - 1334 x 750 píxeles - color - 4.7" - 326 ppi - Retina HD display with IPS technology - revestimiento oleofóbico resistente a las huellas dactilares',
            color: 'Oro',
            price: '529',
            image: '/images/iphone_7_oro.jpg',
            urlImage: 'https://static.fnac-static.com/multimedia/Images/ES/MC/2e/74/55/5600302/1507-1/tsp20170327121118/Telefono-Movil-Apple-Iphone-7-4g-32gb-oro-Smartphone.jpg#0f36ba74-5bcd-4ef4-a422-d6aca062dc24',
            SO: 'IOS 10'

        },
        {
            id: 2,
            title: 'Samsung Galaxy S7 Edge 5,5" 4GB',
            description: 'Pantalla OLED - 2560 x 1440 píxeles - color - 5.5" - 534 ppi - Quad HD Super AMOLED',
            color: 'Plata',
            price: '369',
            image: '/images/Samsung_Galaxy_s7_Edge_plata.jpg',
            urlImage: 'https://static.fnac-static.com/multimedia/Images/ES/NR/1c/b0/12/1224732/1505-1.jpg',
            SO: 'Google Android'
        },
        {
            id: 3,
            title: 'Huawei P Smart 5.6" 32GB',
            description: 'Pantalla 5,6" FullHD+ (2.160 x 1.080) 18:9 - Kirin 659 Octa-core Cortex A53 (8 núcleos) a 2,36 GHz',
            color: 'Oro',
            price: '195',
            image: '/images/Huawei_P_Smart_32gb.jpg',
            urlImage: 'https://static.fnac-static.com/multimedia/Images/ES/NR/27/ec/15/1436711/1505-1.jpg',
            SO: 'Android 8.0 Oreo EMUI 8.0'
        },
        {
            id: 4,
            title: 'Apple iPhone 8 64GB Gris espacial',
            description: 'Pantalla Retina HD Pantalla panorámica LCD Multi - Touch de 4, 7 pulgadas(en diagonal) con tecnología IPS - Resolución de 1.334 por 750 píxeles a 326 p / p Contraste de 1.400: 1(típico) Brillo máximo 625 cd / m2 True Tone, 3D Touch',
            color: 'Gris espacial',
            price: '689',
            image: '/images/iPhone_8_64GB_Gris.jpg',
            urlImage: 'https://static.fnac-static.com/multimedia/Images/ES/NR/43/45/15/1393987/1505-1.jpg',
            SO: 'Android 8.0 Oreo EMUI 8.0'
        },
        {
            id: 5,
            title: 'Samsung Galaxy S8 5,8" 64GB',
            description: 'Pantalla OLED - 2960 x 1440 píxeles - color - 5.8" - 570 ppi - Quad HD+ Super AMOLED',
            color: 'Negro',
            price: '455',
            image: '/images/Samsung_Galaxy_S8.jpg',
            urlImage: 'https://static.fnac-static.com/multimedia/Images/ES/NR/18/6d/14/1338648/1505-1.jpg',
            SO: 'Android 7.0 Nougat'
        },
        {
            id: 6,
            title: 'Honor 10 5,8" 128GB',
            description: 'Pantalla LCD - 2280 x 1080 píxeles - color - 5.84" - 432 ppi - 19:9 - LTPS',
            color: 'Azul',
            price: '410',
            image: '/images/Honor_10.jpg',
            urlImage: 'https://static.fnac-static.com/multimedia/Images/ES/NR/0c/42/19/1655308/1505-1.jpg',
            SO: 'Android 8.1 Oreo con HUAWEI Emotion UI 8.1'
        }
    ];

    let responsePhones = []
    responsePhones['totalPhones'] = phones.length;

    phones = phones.slice((request.query.page - 1) * 4, request.query.page * 4);
    responsePhones['phones'] = phones;

    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({totalPhones: responsePhones['totalPhones'], selected: request.query.page, phones: responsePhones['phones']}));
});

app.use('/images', express.static('images'));

app.listen(port, () => console.log(`Listening on port ${port}`));