import Banner from "./components/Banner";
import FeaturedCard from "./components/FeaturedCard";
import Section from "./components/Section";
import InnerSection from "./components/InnerSection";
import GridSystem from "./components/GridSystem";
import Latest from "./components/Latest";
import AppCard from "./components/AppCard";
import Button from "./components/Button";
import Search from "./components/Input";
import CardBasic from "./components/CardBasic";
import NewsletterForm from "./components/forms/NewsletterForm";

export default function Home() {
  return (
    <div>
      <Latest />
      <div className="relative">
        <Banner
          title={`India's G20 Presidency`}
          description={`India's G20 presidency has marked a significant milestone in its global leadership role. With, India taking the presidency for the first time, it is steering discussions and initiatives among the world's major economies to address complex challenges.`}
          action={"/"}
          latest={"true"}
          bgimgUrl={`md:bg-[url('/assets/images/deskimage.png')]`}
          mobimgUrl={`bg-[url('/assets/images/mobimage.png')]`}
        />
        <div className="absolute w-[90%] bottom-[-8px] left-[5%] md:left-[64px]">
          <Search
            action={"/"}
            icon={"/assets/icons/search.svg"}
            iconSize={24}
            placeholder={"Find nearby Aadhar centres"}
            iconpos={"a"}
          />
        </div>
      </div>
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
          <GridSystem type={"application"}>
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
          Maps &#38; OGC Services
        </h2>
        <InnerSection>
          <GridSystem
            type={'application'}
          >
            <CardBasic/>
            <CardBasic/>
            <CardBasic/>
            <CardBasic/>
          </GridSystem>
        </InnerSection>
      </Section>
      <Section
        bg={`bg-[url('/assets/images/newsletter.png')]`}
        
      >
        <div className='absolute  opacity-40 bg-black h-full w-full top-0 left-0'></div>
        <h2
          className="
          text-white
          tracking-tighter
          text-5xl
          font-bold
          text-center
          sm:text-left
          mb-4
          z-10
          "
        >
        Explore Our Newsletter
        </h2>
        <NewsletterForm/>
        {/* <Image className="absolute right-0 top-0 h-full w-full lg:w-auto opacity-60 z-0" src={'/assets/images/newsletter.png'} width={1000} height={1000} alt={'image of space ai gnerated'}/> */}
        
      </Section>
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
          Central Applications
        </h2>
        <InnerSection>
          <GridSystem
          type={'application'}
          >
            <CardBasic/>
            <CardBasic/>
            <CardBasic/>
            <CardBasic/>
          </GridSystem>
        </InnerSection>
      </Section>
    </div>
  );
}
