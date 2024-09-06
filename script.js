// callback
// syncronus callbackk

// function halo(nama){
//     alert(`Halo ${nama} `);
// }

// function tampilkanPesan(callbackk){
//     const nama = prompt('Masunkkan nama : ');
//     callbackk(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`));

//==========================================================

// const mhs = [
//     {
//         "nama": "Alif Cepmek",
//         "profesi": "influencer"
//     },
//     {
//         "nama": "Mantan Reyhan",
//         "profesi": "Penyanyi"
//     },
//     {
//         "nama": "Erpan Son of Mars",
//         "profesi": "Youtuber"
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 2000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama.toUpperCase());
// });
// console.log('selesai');


// =========================================================

//ASYNCRONUS CALLBACK

// const reqTestCallback = (resolve, reject) =>{
//     setTimeout(()=>{
//         let isi = "";
//         const mhs = ["aing", "teing", "darling"];
//         mhs.forEach( m => {
//             isi += m + "\n";
//         });
//         resolve(isi);
//     },2000);
// };

// console.log("mulai");
// reqTestCallback((res) =>{
//     console.log(res);
// });
// console.log("selesai");

// ============================================================

// ASYNCRONUS USE PROMISE

// contoh 1
// const janji = new Promise((resolve, reject) =>{
//     if(false){
//         setTimeout(() =>{
//             resolve("janji ditepati");
//         }, 2000);
//     }else{
//         setTimeout(() =>{
//             reject("tidak ditepati");
//         }, 2000);
//     }
// });

// console.log('mulai');
// janji
//     .finally(() => console.log('selesai menunggu'))
//     .then(res => console.log('OK! : ' + res))
//     .catch(res => console.log('NOT OK! : ' + res))
// console.log('selesai');

// contoh 2
// const film = new Promise((resolve) => {
//     setTimeout(() =>{
//         resolve({
//             judul: "Avengers EndGame",
//             tahun: "2019"
//         })
//     }, 1000);
// });

// const cuaca = new Promise((resolve) => {
//     setTimeout(() =>{
//         resolve({
//             kota: "Medan",
//             temp: 31,
//             kondisi: "cerah"
//         })
//     }, 500);
// });

// Promise.all([film, cuaca])
//     // .then(res => console.log(res))
//     .then(res =>{
//         const [film, cuaca] = res;
//         console.log(film);
//         console.log(cuaca);

//     })

// =============================================================

//ASYNC AWAIT

// const reqTestCallback= () =>{
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//         let isi = "";
//         const mhs = ["aing", "teing", "darling"];
//         mhs.forEach( m => {
//             isi += m + "\n";
//         });
//         resolve(isi);
//     },2000);
//     });
// };

// async function callThem(){
//     console.log("mulai");
//     const displayIt = await reqTestCallback().then((v) => {
//         console.log(v)});
//     console.log("selesai");
// };
// callThem()

// ==========================================================

//ASYNCRONUS CALLBACK USE XMLHTTPREQUEST

// function getDataMahsiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4 ) {
//             if( xhr.status === 200 ) {
//                 success(xhr.response);
//             }else if( xhr.status === 404 ) {
//                 error();
//             }
//         }

        
//     }
//     xhr.open('get', url);
//     xhr.send();

// }

// console.log('mulai');
// getDataMahsiswa('mahasiswa.json', (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach( m => console.log(m.profesi));
// }, () => {

// }
// );
// console.log('selesai');

// ================================================================

//ASYNCRONUS USE AJAX

// console.log('mulai');
// $.ajax({
//     url: 'mahasiswa.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.profesi));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// })
// console.log('selesai');

// ================================================================