import { useEffect, useState } from "react"

const useProductDetail = productId => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://bikewarehouse-heroku.herokuapp.com/inventory/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [productId]);
  return [product, setProduct]
}

export default useProductDetail;