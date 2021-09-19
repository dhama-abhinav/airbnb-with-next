import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-black pb-5 font-semibold text-4xl">
            Explore Nearby
          </h2>
          {/* Pull data from server-API endpoints */}

          <div className="pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-black py-6 font-semibold text-4xl">
            Live Anywhere
          </h2>
          <div className="flex space-x-4 p-3  overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
                // distance={distance}
              />
            ))}
          </div>
        </section>
        <LargeCard 
         img="https://links.papareact.com/4cj"
         title="The Greatest Outdoor"
         description="Wishlist created by Airbnb"
         buttonText ="Get Inspired"
        />
       
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
      //exploreData acc to ES6
    },
  };
}
