//styles
import styles from './Form.module.sass';

//react
import { FormEvent, useState } from 'react';
import { dados } from '../../types/dados';


type Props = {
    nome: string;
    marca: string
    cor: string;
    ano: number;
    placa: string;
    onAdd: (nome: string, marca: string, cor: string, ano: number, placa: string) => void
    setNome: React.Dispatch<string>
    setMarca: React.Dispatch<string>
    setCor: React.Dispatch<string>
    setAno: React.Dispatch<number>
    setPlaca: React.Dispatch<string>

}


export function Form({ nome, marca, cor, ano, placa, onAdd, setNome, setMarca, setCor, setAno, setPlaca }: Props) {

    const handleSubmitClick = async (e: FormEvent) => {
        e.preventDefault();
        if (nome && marca && cor && ano && placa) {
            onAdd(nome, marca, cor, ano, placa);
        } else {
            alert("Preencha os campos");
        }

    };


    return (
        <div className={styles.pagina}>
            <div className={styles.container_form}>
                <form className={styles.former}>
                    <label>
                        <span>Nome:</span>
                        <input type="text" placeholder='Sandero' value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>
                    <label>
                        <span>Marca:</span>
                        <input type='text' placeholder='Renault' value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </label>
                    <label>
                        <span>Cor:</span>
                        <input type="text" placeholder='Vermelho' value={cor} onChange={(e) => setCor(e.target.value)} />
                    </label>
                    <label>
                        <span>Ano:</span>
                        <input type="number" placeholder='##/##/##' value={ano} onChange={(e) => setAno(parseInt(e.target.value))} />
                    </label>
                    <label>
                        <span>Placa:</span>
                        <input type="text" placeholder='PWZ1020' value={placa} onChange={(e) => setPlaca(e.target.value)} />
                    </label>

                    <button type='submit' onClick={handleSubmitClick} className={styles.button}>Criar</button>
                </form>
            </div>

        </div>
    );

}
