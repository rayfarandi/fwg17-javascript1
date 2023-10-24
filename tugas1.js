const biodata = {
    name: "Ray Frandi",
    age: 29,
    hobbies: ["Video Game", "Otomotif", "Olahraga"],
    isMarried: true,
    schoolList: [
      {
        name: "SMA Setia Negara",
        yearIn: 2009,
        yearOut: 2012,
        major: null
      },
      {
        name: "UNIVERSITAS GUNADARMA",
        yearIn: 2012,
        yearOut: 2017,
        major: "SISTEM INFORMASI"
      }
    ],
    skills: [
      {
        skillName: "JavaScript",
        level: "Biginer"
      },
      {
        skillName: "HTML",
        level: "beginner"
      },
      {
        skillName: "CSS",
        level: "beginner"
      }
    ],
    interestInCoding: true
  };
  
  // Contoh penggunaan
  console.log(`Nama: `,biodata.name);
  console.log(`Umur: `,biodata.age);
  console.log(`Hobbies: `,biodata.hobbies);
  console.log(`IsMarried: `,biodata.isMarried);
  console.log(biodata.schoolList);
  console.log(biodata.skills);
  console.log(`interestInCoding: `,biodata.interestInCoding);
  