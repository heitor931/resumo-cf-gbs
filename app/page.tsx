import CarouselComponent from "./_general-components/Carrousel";

function HomePage() {
  return (
    <main className="h-screen  flex justify-center align-center">
      <section className="w-3/4 ">
        <CarouselComponent />
      </section>
    </main>
  );
}

export default HomePage;