
const Products = [
    {
        id: 1,
        name: "Disco Sólido SSD Gigabyte 240GB 500MB/s",
        price: 5150,
        category: "Almacenamiento",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10080_Disco_S__lido_SSD_Gigabyte_240GB_500MB_s_bbf5e93d-grn.jpg",
        stock: 20
    },
    {
        id: 2,
        name: "Auriculares Logitech G335 Black",
        price: 8500,
        category: "Auriculares",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27939_Auriculares_Logitech_G335_Black_91d72c96-grn.jpg",
        stock: 10
    },
    {
        id: 3,
        name: "Mouse Logitech Wireless M280 Blue",
        price: 1250,
        category: "Mouse",
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13488_Mouse_Logitech_Wireless_M280_Blue_367d07e7-grn.jpg',
        stock: 15
    },
    {
        id: 4,
        name: "Teclado Mecanico HP HyperX Alloy MKW100 Switch Red",
        price: 8600,
        category: "Teclado",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31463_Teclado_Mecanico_HP_HyperX_Alloy_MKW100_Switch_Red_c2ad18dd-grn.jpg",
        stock: 20
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Products)
        },2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Products.find(prod => prod.id === id))
        },2000)
    })
}