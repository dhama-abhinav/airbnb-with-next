import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />

      <main className="flex pt-14 px-6">
        <section>
          <p className="text-sm">300+ stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-5">Stays in Mars</h1>
          <div className="hidden lg:inline-flex space-x-3">
              <p className="button">Cancellation Flexiblity</p>
              <p className="button">Types of places</p>
              <p className="button">Prices</p>
              <p className="button">Rooms and beds</p>
              <p className="button">More FIlters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
