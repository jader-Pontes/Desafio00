import { SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//img
import editar from './assets/editar.png'
import letrax from './assets/letra-x.png'
import heart from './assets/love.png'

//style
import styles from './App.module.sass';

//pages
import { Home } from './Pages/Home/Home';
import { Form } from './Pages/Form/Form';
import { Filtro } from './Pages/Filtro/Filtro';

//type
import { dados } from './types/dados';

//api
import { api } from '../src/services/api';



function App() {

  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [cor, setCor] = useState('');
  const [ano, setAno] = useState(0);
  const [placa, setPlaca] = useState('');
  const [veiculos, setVeiculos] = useState<dados[]>([]);
  const [loading, setLoading] = useState(false);
  const [cardFav, setCardFav] = useState();
  const [cardCars, setCardCars] = useState();
  const [view, setView] = useState("false");

  const { id } = useParams()

  useEffect(() => {
    loadVeiculos();
  }, []);

  const changeValue = () => {
    setView('true')
  }


  const loadVeiculos = async () => {
    setLoading(true);
    let json = await api.getAllCars()
    setLoading(false)
    setVeiculos(json)
  }
  const deleteCar = async (id: number) => {
    let json = await api.deleteCarId(id);
    setVeiculos(veiculos.filter(veiculo => veiculo.id !== id))

  }
  const update = async (id: number, nome: string, marca: string, cor: string, ano: number, placa: string) => {
    let json = await api.updateCar(id, nome, marca, cor, ano, placa)
  }

  const handleAddCar = async (nome: string, marca: string, cor: string, ano: number, placa: string) => {
    let json = await api.AddNewCar(nome, marca, cor, ano, placa);
    if (json.id) {
      alert('Novo veiculo salvo')
    } else {
      alert('Ocorreu algum erro!');
    }

  }

  return (
    <div className={styles.App}>
      {view === "false" && < Home valor={setView} date={{
        id: 0,
        nome: '',
        marca: '',
        cor: '',
        ano: 0,
        placa: ''
      }} />}
      {view === "true" && <Form
        onAdd={handleAddCar}
        nome={nome}
        marca={marca}
        cor={cor}
        ano={ano}
        placa={placa}
        setNome={setNome}
        setMarca={setMarca}
        setCor={setCor}
        setAno={setAno}
        setPlaca={setPlaca}
      />
      }
      <h2>Meus anuncios</h2>
      <div className={styles.container_cars}>
        {veiculos.map((item: dados) => (
          <section className={styles.cards} key={item.id}>
            <div className={styles.container_img}>
              <img src={editar} alt="edition" className={styles.edit} onClick={() => update(item.id, item.nome, item.marca, item.cor, item.ano, item.placa)} onChange={changeValue} />
              <img src={letrax} alt="x" className={styles.letter_x} onClick={() => deleteCar(item.id)} />
              <img src={heart} alt="heart" className={styles.heart} />
            </div>
            <div className={styles.content_cards}>
              <h2>{item.nome}</h2>
              <p>{item.marca}</p>
              <p>{item.cor}</p>
              <p>{item.ano}</p>
              <p>{item.placa}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App;
