let barangDipilih = "";
let hargaBarang = 0;


// MEMBUKA MODAL BOOKING

function booking(namaBarang, harga) {

    barangDipilih = namaBarang;
    hargaBarang = harga;

    document.getElementById("barangDipilih").innerText =
        "Barang yang dipilih: " + namaBarang;

    document.getElementById("bookingModal").style.display = "flex";
}


// MENUTUP MODAL

function tutupModal() {

    document.getElementById("bookingModal").style.display = "none";

}


// KIRIM KE WHATSAPP

function kirimWhatsApp(event) {

    event.preventDefault();

    const nama =
        document.getElementById("nama").value;

    const nomor =
        document.getElementById("nomor").value;

    const tanggalAmbil =
        document.getElementById("tanggalAmbil").value;

    const tanggalKembali =
        document.getElementById("tanggalKembali").value;

    const jumlah =
        parseInt(
            document.getElementById("jumlah").value
        );


    // Menghitung jumlah hari

    const mulai =
        new Date(tanggalAmbil);

    const kembali =
        new Date(tanggalKembali);

    const selisih =
        kembali - mulai;

    const jumlahHari =
        Math.ceil(
            selisih /
            (1000 * 60 * 60 * 24)
        );


    if (jumlahHari <= 0) {

        alert(
            "Tanggal kembali harus setelah tanggal ambil."
        );

        return;

    }


    // Menghitung total

    const total =
        hargaBarang *
        jumlah *
        jumlahHari;


    const totalFormat =
        new Intl.NumberFormat(
            "id-ID"
        ).format(total);


    // NOMOR WHATSAPP PEMILIK

    const nomorPemilik =
        "6283852752092";


    // PESAN

    const pesan =

        `Halo Jelajah Rental 👋

Saya ingin melakukan booking alat pendakian.

Nama:
${nama}

No. WhatsApp:
${nomor}

Barang:
${barangDipilih}

Jumlah:
${jumlah}

Tanggal Ambil:
${tanggalAmbil}

Tanggal Kembali:
${tanggalKembali}

Durasi:
${jumlahHari} hari

Total:
Rp${totalFormat}

Mohon konfirmasi ketersediaan barang.

Terima kasih 🙏`;


    // Membuka WhatsApp

    const url =
        "https://wa.me/" +
        nomorPemilik +
        "?text=" +
        encodeURIComponent(pesan);


    window.open(url, "_blank");

}