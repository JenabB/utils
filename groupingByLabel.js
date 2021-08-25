//Mendapatkan grouping label berdasarkan first name
// Dapatkan grouping label dan push ke new grouping label
const groupingLabel = sorted.reduce((r, e) => {
  let groupLabel = e.nama.substr(0, 1).toUpperCase();
  // Cek jika groupLabel belum terisi
  if (!r[groupLabel]) r[groupLabel] = { groupLabel, data: [e] };
  // Cek jika groupLabel sudah terisi, maka push e
  else r[groupLabel].data.push(e);
  // Kembalikan array yang hanya berisi groupLabel saja
  return r;
}, {});

// Tambahkan ke dalam newData
let newData = Object.values(groupingLabel);

// New Data ini akhirnya berisi sekelompok data yang terdiri dari groupingLabel dan data yang sudah dikelompokkan.
