import React, { Fragment, useEffect, useContext } from "react";

import { Context } from "../context";

import { Helmet } from "react-helmet";

// Bootstrap
import { Container } from "react-bootstrap";
import NavMenu from "../components/Nav";

function OpettajanTilat() {
  const { rootState, opettajanTila } = useContext(Context);
  const { oTila } = rootState;

  // This function will called only once
  useEffect(() => {
    getEmploye();
  }, []);

  const getEmploye = async () => {
    const oTila = await opettajanTila();
    if (oTila) {
      console.log(oTila);
    }
  };


  // Jos axios ei ole ehtinyt hakea mySQl Arrayta tulee virhe mutta tämä korjaa sen. 
  if (!oTila) return 'no data';
  if (!Array.isArray(oTila)) return 'results are not array'

  return (
    <Fragment>
      <Helmet>
        <title>Opettajan Tilat | Ossi</title>
      </Helmet>

      <Container>
        <br />
        <NavMenu />

        <br />

        <div className="col-md-12">
          <h1>Opettajien tilat</h1>
          <label for="hae">Hae</label>
          <input id="hae" class="form-control" />
        </div>

        
        
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Opettajan nimi</th>
              <th>Tila</th>
              <th>Viimeksi päivitetty</th>
              <th>Sähköpostiosoite</th>
            </tr>
          </thead>

          <tbody>
            {oTila.map((theData) => (
              <tr key={theData.id}>
                <td>{theData.first_name} {theData.last_name}</td>
                <td>{theData.status_text}</td> 
                <td>{theData.status_date}</td>
                <td>{theData.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}

export default OpettajanTilat;
