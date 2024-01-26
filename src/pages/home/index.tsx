import { Banner, Footer, Hero, LatestNotesDemo, Navbar } from '@/features';

export const HomePage = () => {
  return (
    <>
      <Banner />

      <Navbar />

      <div className="-mt-28 pb-8 flex flex-col items-center w-full">
        <Hero />

        <LatestNotesDemo />
      </div>

      <Footer />
    </>
  );
};
