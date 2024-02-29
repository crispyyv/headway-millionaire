import { HeroSection } from "@/widgets/hero-section";

export default function HomePage() {
  return (
    <HeroSection
      title={
        <>
          Who wants to be
          <br />a millionaire?
        </>
      }
      button="Start"
    />
  );
}
