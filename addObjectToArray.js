const [product, setProduct] = useState([]);
const [addProduct, setAddProduct] = useState({
  productName: "",
  productPrice: "",
  quantity: "",
});

const handleUpdateProduct = (e) => {
  e.preventDefault();
  setProduct([...product, addProduct]);
  setAddProduct({
    productName: "",
    productPrice: "",
    quantity: "",
  });
};

<form onSubmit={handleUpdateProduct}>
  <input
    type="text"
    value={addProduct.productName}
    onChange={(e) =>
      setAddProduct({ ...addProduct, productName: e.target.value })
    }
  />
  <input
    type="text"
    value={addProduct.productPrice}
    onChange={(e) =>
      setAddProduct({ ...addProduct, productPrice: e.target.value })
    }
  />
  <input
    type="text"
    value={addProduct.quantity}
    onChange={(e) => setAddProduct({ ...addProduct, quantity: e.target.value })}
  />
  <input type="submit" value="Submit" />
</form>;
