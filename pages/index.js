import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "../Components/Banner/banner";
import CharityDifference from "../Components/Charity_With_Difference/CharityDifference";
import Contribute from "../Components/Contribute/Contribute";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header/Header";
import Reviews from "../Components/Reviews/reviews";
import OurMission from "../Components/OurMission/ourMission";
import GetInspire from "../Components/GetInspire/getInspire";
import NewsAndHappiness from "../Components/NewsAndHappiness/newsAndHappiness";
import SupportPartner from "../Components/SupportPartner/supportPartner";
import Volunteers from "../Components/Volunteers/Volunteers";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <CharityDifference></CharityDifference>
      <Contribute></Contribute>
      <OurMission></OurMission>
      <GetInspire></GetInspire>
	  <Volunteers></Volunteers>
      <Reviews></Reviews>
      <NewsAndHappiness />
      <SupportPartner />
      <Footer />
    </div>
  );
}
