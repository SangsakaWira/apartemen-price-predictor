import "./styles.css";
// import {FormSelect} from 'react-bootstrap'
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Sistem Prediksi Harga Apartemen</h1>
      <form
        className="form"
        method="post"
        onSubmit={(event) => {
          // axios.post("13.229.114.25:5000/predict", data).then((response) => {
          //   console.log(response);
          // });
          alert("Hasil Prediksi: Rp 4.500.000");
          event.preventDefault();
        }}
      >
        <input
          className="input"
          name="lokasi"
          type="number"
          placeholder="Lokasi"
        />
        <br />
        <input
          className="input"
          name="jenis_unit"
          type="number"
          placeholder="Jenis Unit"
        />
        <br />
        <input
          className="input"
          name="type"
          type="number"
          placeholder="Tipe Apartemen"
        />
        <br />
        <input
          className="input"
          name="luas_unit"
          type="number"
          placeholder="Luas Unit"
        />
        <br />
        <input
          className="input"
          name="jumlah_bedroom"
          type="number"
          placeholder="Jumlah Ruangan"
        />
        <br />
        <input
          className="input"
          name="jumlah_lantai"
          type="number"
          placeholder="Jumlah Lantai"
        />
        <br />
        <select
          className="input"
          name="kelengkapan"
          type="number"
          placeholder="Kelengkapan"
        >
          <option>Full Furnished</option>
          <option>Not Furnished</option>
        </select>
        <br />
        <input className="input" type="submit" value="Predict" />
      </form>
    </div>
  );
}
