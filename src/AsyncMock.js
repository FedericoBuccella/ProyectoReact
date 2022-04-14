export const Products = [
    {
        id: 1,
        name: "Disco Sólido SSD Kingston 960GB A400 500MB/s",
        price: 14120,
        category: "Almacenamiento",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11123_Disco_S__lido_SSD_Kingston_960GB_A400_500MB_s_9c46a94b-grn.jpg",
        stock: 20
    },
    {
        id: 2,
        name: "Disco Sólido SSD Gigabyte 240GB 500MB/s",
        price: 5150,
        category: "Almacenamiento",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_10080_Disco_S__lido_SSD_Gigabyte_240GB_500MB_s_bbf5e93d-grn.jpg",
        stock: 20
    },
    {
        id: 3,
        name: "Auriculares Logitech Astro A40 7.1 Black",
        price: 25000,
        category: "Auriculares",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17648_Auriculares_Logitech_Astro_A40_7.1_Black_MixAmp_PRO_PS4_PC_1e803646-grn.jpg",
        stock: 20
    },
    {
        id: 4,
        name: "Auriculares Logitech G335 Black",
        price: 8500,
        category: "Auriculares",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27939_Auriculares_Logitech_G335_Black_91d72c96-grn.jpg",
        stock: 10
    },
    {
        id: 5,
        name: "Mouse Logitech Wireless M280 Blue",
        price: 1250,
        category: "Mouse",
        img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13488_Mouse_Logitech_Wireless_M280_Blue_367d07e7-grn.jpg',
        stock: 15
    },
    {
        id: 6,
        name: "Mouse Logitech G603 Lightspeed Wireless",
        price: 5300,
        category: "Mouse",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6831_Mouse_Logitech_G603_Lightspeed_Wireless_7415e778-grn.jpg",
        stock: 20
    },
    {
        id: 7,
        name: "Teclado Mecanico HP HyperX Alloy MKW100 Switch Red",
        price: 8600,
        category: "Teclados",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31463_Teclado_Mecanico_HP_HyperX_Alloy_MKW100_Switch_Red_c2ad18dd-grn.jpg",
        stock: 20
    },
    {
        id: 8,
        name: "Teclado Mecanico ASUS ROG Strix Falchion NX RGB Switch Blue Wireless",
        price: 22120,
        category: "Teclados",
        img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31017_Teclado_Mecanico_ASUS_ROG_Strix_Falchion_NX_RGB_Switch_Blue_Wireless_db773696-grn.jpg",
        stock: 20
    }
]

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? Products.filter( (prod) => prod.category === categoryId) : Products)
            
        },500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Products.find(prod => prod.id === parseInt(id)))
        }, 500)
    })
}

const categories = [
    {Id: 'Teclados', Description:'Teclados'},
    {Id: 'Mouse', Description:'Mouse'},
    {Id: 'Auriculares', Description:'Auriculares'},
    {Id: 'Almacenamiento', Description:'Almacenamiento'}
]

export const getCategories = () => {    
    return new Promise (resolve =>{ 
        setTimeout(()=>{
            resolve(categories)
        },500)
    })
}