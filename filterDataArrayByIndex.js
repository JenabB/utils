const contohArray = [
    { name: "contoh_1", title="ini contoh" },
    { name: "contoh_2", title="ini contoh"},
    { name: "contoh_3" , title="ini contoh"},
    { name: "contoh_4", title="ini contoh"},
    ]

const arrayBaru = contohArray.filter((x, y) => y < 3);

const arrayBaru1 = contohArray.filter((x, y) => y >= 20 && y < 30)