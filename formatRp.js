const nominal = 1000;

const formatRp = (nominal) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(nominal)
    .replace(/(\.|,)00$/g, "");
};

console.log(formatRp(nominal));
