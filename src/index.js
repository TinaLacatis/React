import "./style.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const img = "https://picsum.photos/200";

root.render(
  <div>
    <h1 className="heading">My favourite foods</h1>
    <div>
      <img src={img} alt="img" />
      <br />
      <img
        className="food-img"
        src="https://assets.bonappetit.com/photos/5b9a901947aaaf7cd9ea90f2/3:4/w_1998,h_2665,c_limit/ba-recipe-pasta-al-limone.jpg"
        alt="pasta"
      />
      <img
        className="food-img"
        src="https://cdn.shopify.com/s/files/1/0410/4598/3397/articles/Margherita-9920.jpg?crop=center&height=800&v=1644589966&width=800"
        alt="pizza"
      />
      <img
        className="food-img"
        src="https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg"
        alt="tiramisu"
      />
    </div>
  </div>
);
