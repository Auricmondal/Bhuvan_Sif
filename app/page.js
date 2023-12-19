import Banner from "./components/Banner";
import FeaturedCard from "./components/FeaturedCard";
import Section from "./components/Section";
import InnerSection from "./components/InnerSection";
import GridSystem from "./components/GridSystem";
import Latest from "./components/Latest";
import AppCard from "./components/AppCard";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Latest />
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
          <GridSystem type={"featured"}>
            <FeaturedCard
              action={"/"}
              type={"2r2c"}
              label={"Maps"}
              imageUrl={`bg-[url('/assets/images/map.png')]`}
            />
            <FeaturedCard
              action={"/"}
              type={"2r"}
              label={"Weather"}
              imageUrl={`bg-[url('/assets/images/Weather.png')]`}
            />
            <FeaturedCard
              action={"/"}
              label={"Data Archives"}
              imageUrl={`bg-[url('/assets/images/da.png')]`}
            />
            <FeaturedCard
              action={"/"}
              label={"Vista"}
              imageUrl={`bg-[url('/assets/images/vista.png')]`}
            />
          </GridSystem>
        </InnerSection>
      </Section>
      <Section bg={"bg-black"}>
        <h2
          className="
        text-center 
        md:text-left 
        font-extrabold 
        text-4xl 
        lg:text-5xl
        text-white
        "
        >
          Application Center
        </h2>
        <InnerSection>
          <GridSystem type={'application'}>
            <AppCard
              label={"Agriculture"}
              description={
                "View the agriculture related applications and its resources"
              }
              bgImg={'bg-[url("/assets/images/agriculture.jpg")]'}
              action={"/"}
            />
            <AppCard
              label={"Tourism"}
              description={
                "View the tourism related applications and its resources"
              }
              bgImg={'bg-[url("/assets/images/tourism.png")]'}
              action={"/"}
            />
            <AppCard
              label={"Forestry"}
              description={
                "View the forestry related applications and its resources"
              }
              bgImg={'bg-[url("/assets/images/forestry.jpg")]'}
              action={"/"}
            />
          <Button
            action={"/"}
            bg={"bg-[#A1160A]"}
            color={"text-white"}
            icon={"/assets/icons/arrow.svg"}
            iconpos={"a"}
            label={"Explore"}
            size={"md"}
            rotate={""}
            btnSize={16}
          />
          </GridSystem>
        </InnerSection>
      </Section>
    </div>
  );
}
