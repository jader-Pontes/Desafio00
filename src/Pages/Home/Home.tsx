import React, { Dispatch, SetStateAction } from 'react'

//styles
import styles from "./Home.module.sass";

//type
import { dados } from '../../types/dados';


//img
import Menu from '../../assets/iconemenu.jpg';
import iconSearch from '../../assets/IconeSearch.jpg';
import { type } from '@testing-library/user-event/dist/type';


type Props = {
    valor: any
    date: dados
}


export function Home({ valor, date }: Props) {

    const handleModal = () => {
        valor('true');
    };


    return (

        <div className={styles.pagina}>
            <div className={styles.container}>
                <div className='icons-container'>
                    {/* <img src={iconSearch} alt="search" className={styles.search_icon} width={25} height={25} /> */}
                    <input type="text" placeholder='Buscar' />
                    <img src={Menu} alt="menu" className={styles.menu} width={65} height={40} />
                </div>
                <button onClick={handleModal} className={styles.botao}>Adicionar novo veiculo</button>

            </div>
        </div>



    );
}
