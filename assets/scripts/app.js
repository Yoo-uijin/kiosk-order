const smoothie = document.getElementById("smoothie");

const menuSize = document.querySelectorAll(".menu-size");
const menuImg = document.querySelectorAll(".menu-img");
const menuName = document.querySelectorAll(".menu-name");
const menuPrice = document.querySelectorAll(".menu-price");

const typeOfSmoothie = [
  {
    size: "Large",
    name: "망고 스무디",
    price: "5,500원",
    img: "assets/img/smoothie/mango__smoothie.png",
  },
  {
    size: "Large",
    name: "딸기 쿠키 스무디",
    price: "5,500원",
    img: "assets/img/smoothie/strawberry-cookie__smoothie.png",
  },
  {
    size: "Large",
    name: "제주 그린티 스무디",
    price: "5,500원",
    img: "assets/img/smoothie/jeju-green-tea__smoothie.png",
  },
  {
    size: "Large",
    name: "청포도 스무디",
    price: "5,100원",
    img: "assets/img/smoothie/green-grape__smoothie.png",
  },
  {
    size: "Large",
    name: "초콜렛 쿠키 & 크림 스무디",
    price: "5,100원",
    img: "assets/img/smoothie/chocolate-cookies-cream__smoothie.png",
  },
  {
    size: "Large",
    name: "초코바른 피스타치오 스무디",
    price: "5,500원",
    img: "assets/img/smoothie/chocolate-covered-pistachio__smoothie.png",
  },
  {
    size: "Large",
    name: "초코바른 초코 스무디",
    price: "5,500원",
    img: "assets/img/smoothie/choco-covered-chocolate__smoothie.png",
  },
  {
    size: "Large",
    name: "초코바른 제주 그린 스무디",
    price: "5,700원",
    img: "assets/img/smoothie/chocolate-covered-jeju-green__smoothie.png",
  },
  {
    size: "Large",
    name: "돌체 크러쉬 위드 샷",
    price: "5,500원",
    img: "assets/img/smoothie/choco-covered-chocolate__smoothie.png",
  },
];

const smoothieClickHandler = function () {
  for (let i = 0; i < typeOfSmoothie.length; i++) {
    [...menuSize][i].textContent = typeOfSmoothie[i].size;
    [...menuImg][i].src = typeOfSmoothie[i].img;
    [...menuName][i].textContent = typeOfSmoothie[i].name;
    [...menuPrice][i].textContent = typeOfSmoothie[i].price;
  }
};

smoothie.addEventListener("click", smoothieClickHandler);
