// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;
      /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = null;
  hasilLooping  = [];
     for (let i = 0  ; i < dataYangAkanDilooping.length; i++)
  {hasilLooping.push(dataYangAkanDilooping[i].namaDepan)}
    /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;
  const Jumlahpria  = [];
  for (let i = 0 ; i < dataYangAkanDilooping.length; i++){
    if (dataYangAkanDilooping[i].jenisKelamin === "M"){
      Jumlahpria.push(dataYangAkanDilooping[i].jenisKelamin)
      jumlahPria = Jumlahpria.length
    }
  }
  

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;
  const Jumlahwanita = [];
  for (let i = 0 ; i < dataYangAkanDilooping.length; i++){
    if (dataYangAkanDilooping[i].jenisKelamin === "F"){
      Jumlahwanita.push(dataYangAkanDilooping[i].jenisKelamin)
      jumlahWanita = Jumlahwanita.length
    }
  }

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = [];
  if  (jumlahPria ==  jumlahWanita) {komentar = "jumlah pria dan wanita berimbang"}
  else  {
    if   (jumlahPria  > jumlahWanita) {komentar = "jumlah pria lebih banyak dari wanita"}
   else  {komentar = "jumlah wanita lebih banyak dari pria"}}

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
