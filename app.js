const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/09/Tteokbokki-yemekcom.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/62164054b9b4ec558362b243-0b7c599a.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Yaprak Sarma",
    category: "Turkish",
    price: 5.99,
    img:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/ogt/zeytinyagli_sarma.webp",
    desc: `Delicious grape leaves stuffed with a mixture of rice, herbs, and spices, served hot with a squeeze of lemon juice on top.`,
  },
  {
    id: 11,
    title: "Adana Kebap",
    category: "Turkish",
    price: 15.99,
    img:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2016/05/adana-kebap-one-cikan.jpg",
    desc: `Adana kebab is a spicy Turkish kebab made with ground lamb or beef and grilled on skewers. It's named after the city of Adana and often served with bulgur pilaf, veggies, and pepper paste.`,
  },
  {
    id: 12,
    title: "Lahmacun",
    category: "Turkish",
    price: 3.99,
    img:
      "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/2-32.webp",
    desc: `Lahmacun is a popular Turkish dish that consists of thin, crispy dough topped with a mixture of minced meat, vegetables, herbs, and spices. It is often served with fresh vegetables and a squeeze of lemon juice on top.`,
  },
  {
    id: 13,
    title: "Mantı",
    category: "Turkish",
    price: 6.99,
    img:
      "https://iasbh.tmgrup.com.tr/e3e557/650/344/0/30/800/451?u=https://isbh.tmgrup.com.tr/sbh/2020/03/31/manti-tarifi-lezzetli-bir-manti-nasil-yapilir-iste-kolay-manti-tarifi-ve-gerekli-malzemeler-1585682776430.jpg",
    desc: `Mantı is a traditional dish in Turkish cuisine. It consists of small pieces of dough filled with ground lamb or a mixture of potatoes and leeks. It is typically served with garlic yogurt and melted butter sauce, and topped with red pepper flakes.`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// her category yi bir kere yazdiriyoruz
const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
    return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
  })
  .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const category = e.currentTarget.dataset.id;
          console.log(category);
          const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          if (category === "All") {
            menuList(menu);
          } else {
            menuList(menuCategory);
          }
        });
      });
    };


const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item)=> {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();


const toggleSwitch = document.querySelector('#dark-mode-toggle');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark'); // body elementine dark-mode class'ını ekle
    }
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.remove('dark'); // body elementine dark-mode class'ını sil
  }
}
});

