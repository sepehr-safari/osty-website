import { Footer, Hero, LatestNotesDemo, Navbar } from '@/features';

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="pb-8 flex flex-col items-center w-full">
        <Hero />

        <LatestNotesDemo />
      </div>

      <Footer />
    </>
  );
};
