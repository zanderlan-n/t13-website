import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { attributes, react as HomeContent } from "../content/home.md";
import Button, { ButtonTypes } from "../components/button";
import Header from "../components/header";
import HomeCarousel from "../components/home-carousel";
import Footer from "../components/footer";

const Home: NextPage = () => {
  let { title, cats } = attributes;
  return (
    <div>
      <Header />
      <HomeCarousel />
      <Footer />
    </div>
  );
};

export default Home;

// <>
// {/* Exemplo dados markdown */}
// <article>
//   <h1>{title}</h1>
//   <HomeContent />
//   <ul>
//     {cats.map((cat: any, k: any) => (
//       <li key={k}>
//         <h2>{cat.name}</h2>
//         <p>{cat.description}</p>
//       </li>
//     ))}
//   </ul>
// </article>
// </>
