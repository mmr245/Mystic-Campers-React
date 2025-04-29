import React, {useState, useEffect
} from 'react' ; 
const banners = [
  { id: 1, src: '../../assets/images/bigfoot-banner.jpg', alt: 'Bigfoot Banner' },
  { id: 2, src: '../../assets/images/bigfoot-camp-banner.jpg', alt: 'Bigfoot Camp Banner' },
  { id: 3, src: '../../assets/images/canoe-banner.jpg', alt: 'Canoe Banner' },
  { id: 4, src: '../../assets/images/findadventure-banner.jpg', alt: 'Find Adventure Banner' },
  { id: 5, src: '../../assets/images/notdeer-banner.jpg', alt: 'Not Deer Banner' },
  { id: 6, src: '../../assets/images/wendingo-banner.jpg', alt: 'Wendingo Banner' },
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner-carousel">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        >
          <img src={banner.src} alt={banner.alt} />
        </div>
      ))}
      <div className="dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;


