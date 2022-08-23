import '../../App.css';
import CardLinkSection from '../../components/CardLinkSection/CardLinkSection';
import { PhotoCarousel } from '../../components/index';

const Home = () => {
  return (
    <>
      <PhotoCarousel />
      <CardLinkSection />
    </>
  )
}

export default Home;