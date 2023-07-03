import { useEffect, useState } from 'react';
import axios from 'axios';

const useRanking = (params) => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const stringifiedParams = JSON.stringify(params);


  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchSearchResults = async () => {
      const endpoint = "http://localhost:8000/ranking";
      try {
        const response = await axios.get(endpoint, {
          params: params,
          headers: {
            accept: 'application/json',
          },
        });
        setResults(response.data.result.map((item) => ({
          id: item.item_code,
          title: item.item_name,
          description: item.item_description,
          price: item.item_price,
          image: item.item_img,
          url: item.item_url,
          //ranking: item.ranking,
          ranking: item.ranking,
          point_rate: item.item_point_rate,
          item_point: item.item_point,
          shop : item.shop,
        })));
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchSearchResults();
  }, [stringifiedParams]);

  return { results, error, loading };
};

export default useRanking