// Pokemones.js
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Contexto from "../context/Contexto";
import { useNavigate } from "react-router-dom";
import "../assets/css/pokemones.css"; // Importa el archivo CSS

const Pokemones = () => {
  const { data } = useContext(Contexto);
  const [pokemon, setPokemon] = useState("Pokemones");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (pokemon === 'Pokemones') return null;
    navigate(`/pokemones/${pokemon}`)
  };

  return (
    <div className="container-pokemones">
      <div className="form-container">
        <h1>Selecciona un pokemon</h1>
        <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3">
            <Form.Select
              className="form-select"
              aria-label="Default select example"
              defaultValue={pokemon}
              onChange={(e) => setPokemon(e.target.value)}
            >
              <option disabled>Pokemones</option>
              {data &&
                data.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Button variant="dark" type="submit">
            Ver Detalle
          </Button>{" "}
        </Form>
      </div>
    </div>
  );
};

export default Pokemones;
