import { createSlice } from "@reduxjs/toolkit";
import LifestyleSportswear1 from "../img/air-max-97-se-shoes-Qt2gjv(mens-sportswear-lifestyle-shoes-1).jpg";
import LifestyleSportswear2 from "../img/air-force-1-react-shoe-7gcHDc(mens-sportswear-lifestyle-shoes).jpg";
import LifestyleByYou1 from "../img/custom-nike-internationalist-low-by-you(mens-byYou-lifestyle-shoes-1).jpg";
import LifestyleByYou2 from "../img/custom-nike-blazer-mid-77-by-you(mens-byYou-lifestyle-shoes-2).jpg";
import AthleticsByYou1 from "../img/custom-nike-vaporfly-next-2-by-you(mens-athletic).jpg";
import BasketballSportswear1 from "../img/air-force-1-mid-off-white-shoes-7LDx46(mens-sportwear-basketball-1).jpg";
import BasketballSportswear2 from "../img/air-trainer-1-sp-shoes-6QJXK2(mens-sportwear-basketball).jpg";
import BasketballByYou1 from "../img/custom-nike-kyrie-infinity-by-you(mens-basketball).jpg";
import BasketballByYou2 from "../img/custom-nike-zoom-freak-3-by-you(mens-basketball).jpg";
import TrainingByYou1 from "../img/custom-nike-metcon-7-by-you(mens-traingym).jpg";
import FootballByYou1 from "../img/custom-nike-phantom-gt-elite-by-you(mens-football).jpg";
import FootballByYou2 from "../img/custom-nike-mercurial-vapor-14-academy-by-you(mens-football).jpg";
import FootballByYou3 from "../img/custom-nike-mercurial-superfly-8-elite-by-you(mens-football).jpg";

const DUMMY_PRODUCT = [
  {
    id: "s1",
    price: 2849000,
    title: "Nike Air Max 97 SE",
    type: "lifestyle",
    brand: "Nike Sportswear",
    link: LifestyleSportswear1,
  },
  {
    id: "s2",
    price: 2079000,
    title: "Nike Air Force 1 React",
    type: "lifestyle",
    brand: "Nike Sportswear",
    link: LifestyleSportswear2,
  },
  {
    id: "s3",
    price: 1729000,
    title: "Nike Internationalist By You",
    type: "lifestyle",
    brand: "Nike By You",
    link: LifestyleByYou1,
  },
  {
    id: "s4",
    price: 1869000,
    title: "Nike Blazer Mid'77 By You",
    type: "lifestyle",
    brand: "Nike By You",
    link: LifestyleByYou2,
  },
  {
    id: "s5",
    price: 4099000,
    title: "Nike ZoomX Vaporfly NEXT",
    type: "athletics",
    brand: "Nike By You",
    link: AthleticsByYou1,
  },
  {
    id: "s6",
    price: 2849000,
    title: "Nike Air Force 1 Mid x Off-White",
    type: "basketball",
    brand: "Nike Sportswear",
    link: BasketballSportswear1,
  },
  {
    id: "s7",
    price: 1799000,
    title: "Nike Air Trainer 1 SP",
    type: "basketball",
    brand: "Nike Sportswear",
    link: BasketballSportswear2,
  },
  {
    id: "s8",
    price: 2489000,
    title: "Kyrie Infinity By You",
    type: "basketball",
    brand: "Nike By You",
    link: BasketballByYou1,
  },
  {
    id: "s9",
    price: 2199000,
    title: "Nike Zoom Freak 3 By You",
    type: "basketball",
    brand: "Nike By You",
    link: BasketballByYou2,
  },
  {
    id: "s10",
    price: 2279000,
    title: "Nike Metcon 7 By You",
    type: "gym-training",
    brand: "Nike By You",
    link: TrainingByYou1,
  },
  {
    id: "s11",
    price: 3969000,
    title: "Nike Phantom GT Elite By You",
    type: "football",
    brand: "Nike By You",
    link: FootballByYou1,
  },
  {
    id: "s12",
    price: 1729000,
    title: "Nike Mercurial Vapor 14 Academy By You",
    type: "football",
    brand: "Nike By You",
    link: FootballByYou2,
  },
  {
    id: "s13",
    price: 3969000,
    title: "Nike Mercurial Superfly 8 Elite By You",
    type: "football",
    brand: "Nike By You",
    link: FootballByYou3,
  },
];

const initialProductState = {
  products: DUMMY_PRODUCT,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    filterProducts(state, action) {
      const { type } = action.payload;
      if (!type) {
        state.products = DUMMY_PRODUCT;
      } else state.products = DUMMY_PRODUCT.filter(item => item.type === type);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
