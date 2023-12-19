import Banner from "./components/Banner";
import FeaturedCard from "./components/featured/FeaturedCard";
import Section from "./components/Section";
import InnerSection from "./components/InnerSection";
import GridSystem from "./components/featured/GridSystem";

export default function Home() {
  return (
    <div>
      <Banner />
      <Section>
        <h2
          className="
        text-center 
        md:text-left 
        font-extrabold 
        text-4xl 
        lg:text-5xl
        "
        >
          Featured
        </h2>
        <InnerSection>
          <GridSystem>
            <FeaturedCard 
              action={'/'}
              type={'2r2c'}
              label={'Maps'}
              imageUrl={`bg-[url('/assets/images/map.png')]`}
            />
            <FeaturedCard 
              action={'/'}
              type={'2r'}
              label={'Weather'}
              imageUrl={`bg-[url('/assets/images/Weather.png')]`}
            />
            <FeaturedCard 
              action={'/'}
              label={'Data Archives'}
              imageUrl={`bg-[url('/assets/images/da.png')]`}
            />
            <FeaturedCard 
              action={'/'}
              label={'Vista'}
              imageUrl={`bg-[url('/assets/images/vista.png')]`}
            />
          </GridSystem>
        </InnerSection>
      </Section>
    </div>
  );
}
