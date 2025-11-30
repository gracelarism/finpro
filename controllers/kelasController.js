let kelasMusik = require("../data/kelasData");

exports.getKelas = (req, res) => {
    const { minHarga, maxHarga } = req.query;
    let result = kelasMusik;

    if (minHarga) result = result.filter(k => k.hargaPerPertemuan >= Number(minHarga));
    if (maxHarga) result = result.filter(k => k.hargaPerPertemuan <= Number(maxHarga));

    res.json({ message: "Daftar Kelas Musik", data: result });
};

exports.getKelasById = (req, res) => {
    const id = Number(req.params.id);
    const kelas = kelasMusik.find(k => k.id === id);

    if (!kelas) return res.status(404).json({ message: "Kelas tidak ditemukan" });

    res.json({ message: "Detail kelas", data: kelas });
};

exports.createKelas = (req, res) => {
    const newData = req.body;

    if (!newData.namaKelas) {
        return res.status(400).json({ message: "namaKelas wajib diisi" });
    }

    newData.id = kelasMusik.length + 1;
    kelasMusik.push(newData);

    res.status(201).json({
        message: "Kelas ditambahkan",
        data: newData
    });
};

exports.updateKelas = (req, res) => {
    const id = Number(req.params.id);
    const index = kelasMusik.findIndex(k => k.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Kelas tidak ditemukan" });
    }

    kelasMusik[index] = { ...kelasMusik[index], ...req.body };

    res.json({ message: "Kelas diperbarui", data: kelasMusik[index] });
};

exports.deleteKelas = (req, res) => {
    const id = Number(req.params.id);
    kelasMusik = kelasMusik.filter(k => k.id !== id);

    res.json({ message: "Kelas dihapus" });
};
