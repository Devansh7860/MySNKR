// https://engine.sneakers123.com/api/releases?currency=eur&page=1&brands=nike
// https://github.com/Stupidism/goat-sneakers/blob/master/api.json



let data = {
    s1 : {
        name: "Retro High OG 'Shadow' 2018",
        price: '$160',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"
    },
    s2 : {
        name: 'Retro OG GS Bred 2019',
        price: '$140',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png"
    },
    s3 : {
        name: "Retro High OG 'Shadow' 2018",
        price: '$160',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
    },
    s4 : {
        name: "Retro 'Space Jam' 2016",
        price: '$160',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png",
    },
    s5 : {
        name: "Retro High OG 'Twist",
        price: '$210',
        img: "https://image.goat.com/750/attachments/product_template_pictures/images/012/910/690/original/554724_065.png.png",
    },
    s6 : {
        name: "Retro 'Win Like '96'",
        price: '$100',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png",
    },
    s7 : {
        name: "Retro OG 'Bred' 2019",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/020/806/485/original/461782_00.png.png",
    },
    s8 : {
        name: "Retro 'Infrared' 2019",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/018/675/311/original/464372_00.png.png",
    },
    s9 : {
        name: "Retro 'Reptile'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/042/384/original/500924_00.png.png",
    },
    s10 : {
        name: " Retro 'Laser",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/018/071/547/original/479524_00.png.png",
    },
    s11 : {
        name: "Retro 'Ice Blue",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/474/777/original/TR_JSP_5_ICE.png.png",
    },
    s12 : {
        name: "Retro 'Cactus Jack'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/012/478/518/original/365514_00.png.png",
    },
    s13 : {
        name: "Retro High OG 'Rookie of the Year'",
        price: '$200',
        img: "https://image.goat.com/750/attachments/product_template_pictures/images/016/152/710/original/402491_00.png.png",
    },
    s14 : {
        name: "Retro High OG 'Mocha'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/018/783/111/original/488879_00.png.png",
    },
    s15 : {
        name:  "Retro OG SP 'Shimmer'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/018/783/111/original/488879_00.png.png",
    },
    s16 : {
        name: "Retro High OG 'Crimson Tint'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/020/249/059/original/485842_00.png.png",
    },
    s17 : {
        name: " Retro High OG 'Turbo Green'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png",
    },
    s18 : {
        name: "Retro Low 'Pink Snakeskin'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/357/907/original/478963_00.png.png",
    },
    s19 : {
        name: "Retro High SB 'Lakers'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/020/270/533/original/CD6578_507.png.png",
    },
    s20 : {
        name: " Retro High OG 'Bred Toe'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/009/559/594/original/144690_00.png.png",
    },
    s21 : {
        name: "Retro High OG 'Origin Story'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/016/867/969/original/478648_00.png.png",
    },
    s21 : {
        name: "Retro 'Gym Red'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/016/596/414/original/376931_00.png.png",
    },
    s22 : {
        name: "Retro Low 'Light Bone Snakeskin'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/219/116/original/CD6846_002.png.png",
    },
    s23 : {
        name: "Retro High SB 'Light Bone'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/147/976/original/497870_00.png.png",
    },
    s24 : {
        name: " Retro High OG 'Phantom'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/020/095/762/original/411931_00.png.png",
    },
    s25 : {
        name: "Low 'Block Party'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/021/317/617/original/SP_AJ1_LOW_BP.png.png",
    },
    s26 : {
        name: "Retro 'Platinum Tint'",
        price: '$200',
        img: "https://image.goat.com/375/attachments/product_template_pictures/images/015/392/851/original/429772_00.png.png",
    }
    
}
export {data}