import { useEffect, useState } from 'react';
import axios from 'axios';

function UncontrolledExample() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://localhost:2000/getBanner');
        setBanners(response.data.data); 
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };
    fetchBanners();
  }, []);

  return (
    <div>
      {banners.map((banner) => (
        <div key={banner._id}>
          <img src={`http://localhost:2000${banner.images}`} style={{ width: '100%', height: 'auto' }} alt={banner.title} />
        </div>
      ))}
    </div>
  );
}

export default UncontrolledExample;
