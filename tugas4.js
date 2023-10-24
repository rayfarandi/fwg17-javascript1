let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  
  // Ubah data menggunakan spread operator
  const newData = {
    ...data,
    name: "Ray Farandi",
    email: "Rayfarandi1994@gmail.com",
    hobby: "Otomotif",
  };
  
  // Menggunakan destructuring untuk mengambil data "street" dan "city"
  let { address: { street, city } } = newData;
  
  console.log(newData);
  console.log("Street:", street);
  console.log("City:", city);
  