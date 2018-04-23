# Daruma Frontend

This is a source code for daruma projcet.

## Getting Started

This project use javascript as base language and npm for package manager. Make sure you have both of them on your system. ([nodejs](https://nodejs.org/en/)).

### Quick Start

1.  Install project dependencies using npm or yarn (npm preferably).
    ```
    npm install
    ```
    or
    ```
    yarn
    ```
2.  Run development server.
    This project using ts-node to run development server.
    ```
    npm start
    ```
    or
    ```
    yarn start
    ```

### Build for Production

To make production build

```
npm run build
```

or

```
yarn build
```

WIP: Find production build best practices.

# Daruma Routes

## daruma.surge.sh/
- Halaman ini untuk melihat list rumah sakit terdekat
- Halaman ini untuk request cari based on only "nama rs"

## daruma.surge.sh/search
- Halaman ini untuk mecari berdasarkan nama rs + (opt) filter contoh: kelas dan harga -> dengan pagination

## daruma.surge.sh/signup
- Halaman ini untuk mengakses halaman signup

## daruma.surge.sh/login
- Halaman ini untuk mengakses halaman login
- Requirement :
  * email yang dimasukkan harus sudah di daftarkan terdaftar
- Akun admin dummy:
  * email : mat@proofn.com
  * password : qwe123123

## daruma.surge.sh/detail
- Halaman ini digunakan untuk melihat detail rumah sakit yang dipilih, terdiri dari nama rumah sakit, alamat, nomor telepon, kamar yang tersedia beserta harganya dan juga petunjuk jalan yang diintegrasi dengan google maps

## daruma.surge.sh/booking
- Halaman ini digunakan untuk melihat pemesanan kamar yang telah dilakukan

# endpoint
