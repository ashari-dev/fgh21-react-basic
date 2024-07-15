import React from "react";

function Table() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Ashari",
      age: 24,
      gender: "Laki-laki",
      isSmoker: true,
      cigarVariant: ["Dunhill", "Marlboro kretek", "Surya"],
    },
    {
      id: 2,
      name: "Bagas",
      age: 32,
      gender: "Laki-laki",
      isSmoker: false,
      cigarVariant: ["Esse"],
    },
  ]);

  function formInput(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const isSmoker = e.target.isSmoke.value === "ya" ? true : false;
    const cigar = e.target.cigarVariant;
    let cigarVariant = [];
    for (let i = 0; i < cigar.length; i++) {
      if (cigar[i].checked) {
        cigarVariant.push(cigar[i].value);
      }
    }
    setData([
      ...data,
      {
        id: Math.round(Math.random() * 129837),
        name,
        age,
        isSmoker,
        gender,
        cigarVariant,
      },
    ]);
    e.currentTarget.reset();
  }

  return (
    <div className="container">
      <form className="form-tabel" onSubmit={formInput}>
        <div>
          <label htmlFor="name">Nama</label>
          <div>
            <input type="text" id="name" name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="age">Umur</label>
          <div>
            <input type="number" id="age" name="age" />
          </div>
        </div>
        <div>
          <span>Gender</span>
          <div className="gender-rokok">
            <div>
            <input type="radio" name="gender" id="men" value={"Laki-laki"} />
            <label htmlFor="men"> Laki-Laki</label>
            </div>
            <div>
            <input type="radio" name="gender" id="woment" value={"Perempuan"} />
            <label htmlFor="woment"> Perempuan</label>
            </div>
          </div>
        </div>
        <div>
          <span>Perokok</span>
          <div className="gender-rokok">
            <div>
            <input type="radio" name="isSmoke" id="yes-smoke" value={"ya"} />
            <label htmlFor="yes-smoke"> Ya</label>
            </div>
            <div>
            <input type="radio" name="isSmoke" id="no-smoke" value={"tidak"} />
            <label htmlFor="no-smoke"> Tidak</label>
            </div>
          </div>
        </div>
        <div>
          <span>Jenis rokok yang pernah dicoba</span>
          <div className="jenis-rokok">
            <div>
              <input
                type="checkbox"
                name="cigarVariant"
                id="marlboro"
                value={"Marlboro"}
              />
              <label htmlFor="marlboro"> Marlboro</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="cigarVariant"
                id="esse"
                value={"Esse"}
              />
              <label htmlFor="esse"> Esse</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="cigarVariant"
                id="dunhill"
                value={"Dunhill"}
              />
              <label htmlFor="dunhill"> Dunhill</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="cigarVariant"
                id="surya"
                value={"Surya"}
              />
              <label htmlFor="surya"> Surya</label>
            </div>
          </div>
        </div>
        <div>
          <button type="submit">SAVA</button>
        </div>
      </form>

      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Nama</th>
            <th style={{ padding: "10px" }}>Umur</th>
            <th style={{ padding: "10px" }}>Gender</th>
            <th style={{ padding: "10px" }}>Perokok</th>
            <th style={{ padding: "10px" }}>Jenis rokok</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => {
            return (
              <tr key={`survey-${i.id}`}>
                <td style={{ padding: "10px" }}>{i.name}</td>
                <td style={{ padding: "10px" }}>{i.age}</td>
                <td style={{ padding: "10px" }}>{i.gender}</td>
                <td style={{ padding: "10px" }}>
                  {i.isSmoker ? "ya" : "Tidak"}
                </td>
                <td style={{ padding: "10px" }}>{i.cigarVariant.join("; ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
