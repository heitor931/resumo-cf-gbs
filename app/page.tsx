import { CarouselDemo } from "./_general-components/Carrousel";

function HomePage() {
  return (
    <main className="h-screen flex justify-center align-center">
      <section className="w-1/2 border border-red">
        <CarouselDemo />
      </section>
    </main>
  );
}

export default HomePage;