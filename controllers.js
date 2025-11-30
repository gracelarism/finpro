let kelasMusik = require("../data/kelasData");


// READ ALL + QUERY
exports.getKelas = (req, res) => {
try {
const { minHarga, maxHarga } = req.query;
let result = kelasMusik;


if (minHarga) {
result = result.filter((k) => k.hargaPerPertemuan >= Number(minHarga));
}
if (maxHarga) {
result = result.filter((k) => k.hargaPerPertemuan <= Number(maxHarga));
}


res.status(200).json({ message: "Daftar Kelas Musik", data: result });
} catch (err) {
res.status(500).json({ message: "Server Error" });
}
};


// READ BY ID
exports.getKelasById = (req, res) => {
try {
const id = Number(req.params.id);
const kelas = kelasMusik.find((k) => k.id === id);


if (!kelas) {
return res.status(404).json({ message: "Kelas tidak ditemukan" });
}


res.status(200).json({ message: "Detail Kelas", data: kelas });
} catch (err) {
res.status(500).json({ message: "Server Error" });
}
};


// CREATE
exports.createKelas = (req, res) => {
try {
const newData = req.body;


if (!newData.namaKelas) {
return res.status(400).json({ message: "namaKelas wajib diisi" });
}


newData.id = kelasMusik.length + 1;
kelasMusik.push(newData);


res.status(201).json({ message: "Kelas berhasil ditambahkan", data: newData });
} catch (err) {
res.status(500).json({ message: "Server Error" });
}
};


// UPDATE
exports.updateKelas = (req, res) => {
try {
const id = Number(req.params.id);
const index = kelasMusik.findIndex((k) => k.id === id);


if (index === -1) {
return res.status(404).json({ message: "Kelas tidak ditemukan" });
}


kelasMusik[index] = { ...kelasMusik[index], ...req.body };


res.status(200).json({ message: "Kelas berhasil diperbarui", data: kelasMusik[index] });
} catch (err) {
res.status(500).json({ message: "Server Error" });
}
};


// DELETE
exports.deleteKelas = (req, res) => {
try {
const id = Number(req.params.id);
kelasMusik = kelasMusik.filter((k) => k.id !== id);


res.status(200).json({ message: "Kelas berhasil dihapus" });
} catch (err) {
res.status(500).json({ message: "Server Error" });
}
};