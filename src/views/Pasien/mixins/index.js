export default {
  methods: {
    mapPasienFormData(postData) {
      const mapTheKey = key => {
        switch (key) {
          case "nama_lengkap":
            return "nama";

          case "gol._darah":
            return "golongan_darah";

          case "kel/desa":
            return "kelurahan";

          case "no._handphone":
            return "nomor_hp";

          case "nama_penjamin/asuransi":
            return "nama_penjamin";

          case "no._member/polis_asuransi":
            return "nomor_polis";

          default:
            return key;
        }
      };

      return Object.keys(postData).reduce((obj, key) => {
        obj[mapTheKey(key)] = postData[key];
        return obj;
      }, {});
    }
  }
};
