// JavaScript is a single threaded programming language
// However we can have aynchronous code due the Event Loop
// that allows us to run non-blocking code
// Set Timeout

// setTimeout(() => {
//     console.log("One Second has elapsed!");
// }, 1000);

// // Async order:
// console.log("Step 1");

// setTimeout(() => {
//     console.log("Step 2");
// }, 2000);

// console.log("Step 3");

// // Async Await

// const resolveAfter2Seconds = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Resolved");
//         }, 2000);
//     });
// };

// const asyncCall = async () => {
//     console.log("Calling");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// };

// asyncCall();
//
// const getPhotos = async () => {
//    const response = await fetch("https://cat-fact.herokuapp.com?json=true");
//    const photos = await response.json();
//    return photos;
//};

//async function displayPhotos() {
 //   const photo = await getPhotos();
 //   const img = document.createElement("img");
 //   img.src = `https://cat-fact.herokuapp.com${photo.url}`;
 //   document.body.appendChild(img);
//}

//displayPhotos();

const getPhotos = async () => {
    const response = await fetch("https://thedogapi.com/v1/images/search?limit=10");
    const photos = await response.json();
    return photos;
  }
  
  async function displayPhotos() {
    const photos = await getPhotos();
    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = `https://thedogapi.com${photo.url}`;
      document.body.appendChild(img);
    });
  }
  
  displayPhotos();
  

