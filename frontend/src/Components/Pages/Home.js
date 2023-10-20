import {CarouselSlider} from './CarouselSlider';
import { Container } from './Container';

export function Home() {
  const blogTitles = [
    "The Art of Online Bidding",
    "Exploring Rare Collectibles in Auctions",
    "Tips for Successful Auction Bidding",
    "Digital Auctions: A New Era",
    "Auction Etiquette: Do's and Don'ts",
    "Hidden Treasures: Finding Gems in Auctions"
  ];
  const imageUrls = [
    "https://cdn.pixabay.com/photo/2021/07/20/12/35/auction-6480582_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/01/11/10/19/guatemala-1971374_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/01/14/04/gavel-3577254_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/07/25/18/36/ecommerce-3562005_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/19/12/37/ecommerce-3688436_1280.jpg"
  ];
  return (
    <div className="App">
      {/* <Index></Index> */}
      <CarouselSlider />
      <br></br>
      <h1 className="key-features-heading"><strong><i>Key Features🧩</i></strong></h1>
      <br></br>
      <div className="key-features-container">
        <Container title="Live Bidding 🔨" content="Experience real-time bidding excitement with our interactive live bidding feature. Participate in auctions, place bids, and engage with other users in a dynamic bidding environment." />
        <Container title="Verified Sellers 🛒" content="Buy with confidence from our network of verified sellers. We ensure that all sellers are authenticated and trustworthy, providing you with a secure marketplace to explore a wide range of products." />
        <Container title="Admin Dashboard 📲" content="Manage your account, track your transactions, and gain valuable insights into your bidding history through our user-friendly admin dashboard. Stay organized and stay on top of your bidding activities effortlessly." />
      </div>
      <br />
      <h3><strong>Read More on Auctions</strong></h3>
      <br></br>
      <div className="blog-container">
        {blogTitles.map((title, index) => (
          <div className="blog-item" key={index}>
            <h5>{title}</h5>
            <img src={imageUrls[index]} alt={`Blog ${index + 1}`} />
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}