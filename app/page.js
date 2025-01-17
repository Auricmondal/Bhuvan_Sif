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
import Image from "next/image";

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
          bgimgUrl={`md:bg-[url('/assets/images/deskimg.webp')]`}
          mobimgUrl={`bg-[url('/assets/images/mobimage.webp')]`}
        />
        <div 
        className="
        absolute 
        w-[90%] 
        bottom-[-8px] 
        left-[5%] 
        md:left-[64px]
        ">
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
              imageUrl={`bg-[url('/assets/images/maps.webp')]`}
            />
            <FeaturedCard
              action={"/"}
              type={"2r"}
              label={"Weather"}
              imageUrl={`bg-[url('/assets/images/Weather.webp')]`}
            />
            <FeaturedCard
              action={"/"}
              label={"Data Archives"}
              imageUrl={`bg-[url('/assets/images/da.webp')]`}
            />
            <FeaturedCard
              action={"/"}
              label={"Vista"}
              imageUrl={`bg-[url('/assets/images/vista.webp')]`}
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
              bgImg={'bg-[url("/assets/images/agriculture.webp")]'}
              action={"/"}
            />
            <AppCard
              label={"Tourism"}
              description={
                "View the tourism related applications and its resources"
              }
              bgImg={'bg-[url("/assets/images/tourism.webp")]'}
              action={"/"}
            />
            <AppCard
              label={"Forestry"}
              description={
                "View the forestry related applications and its resources"
              }
              bgImg={'bg-[url("/assets/images/forestry.webp")]'}
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
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/thematic.webp')]`}
              label={'Thematic Services'}
            />
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/ocean.webp')]`}
              label={'Ocean Services'}
            />
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/disaster.webp')]`}
              label={'Disaster Management'}
            />
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/cmap.webp')]`}
              label={'Create a Map'}
            />
          </GridSystem>
        </InnerSection>
      </Section>
      <Section
        bg={`bg-[url('/assets/images/newsletter.webp')]`}
        
      >
        <div 
        className='
        absolute  
        bg-gradient-to-r 
        from-black 
        to-transparent 
        h-full 
        w-full 
        top-0 
        left-0'></div>
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
          relative
          "
        >
        Explore Our Newsletter
        <Image 
        className="
        absolute 
        bottom-16 
        sm:bottom-12 
        sm:left-[-10px] 
        sm:w-[200px]" 
        src={'/assets/images/paper.svg'} 
        width={100} 
        height={100} 
        alt="paperplane svg log"
        />
        </h2>
        <NewsletterForm/>
      
        
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
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/ministry.webp')]`}
              label={'Central Minitries'}
            />
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/sapp.webp')]`}
              label={'Special Applications'}
            />
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/ggov.webp')]`}
              label={'G Governance'}
            />
            <CardBasic
              action={'/'}
              bg={`bg-[url('/assets/images/state.webp')]`}
              label={'State Application'}
            />
          </GridSystem>
        </InnerSection>
      </Section>
    </div>
  );
}
