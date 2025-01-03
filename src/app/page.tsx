import Add from "@/components/add";
import Blog from "@/components/blog/blogCard";
import HeroSlider from "@/components/carousel";
import Categories from "@/components/categories ";
import CategoryOptions from "@/components/category-option/category-option";
import Discount from "@/components/discount";
import Products from "@/components/product/trending-products";

export default function Home() {
  return (
<div>
  <HeroSlider/>
  <Products/>
  <Add />
  <Categories />
  <CategoryOptions />
  <Discount />
  <Blog />
</div>  );
}
