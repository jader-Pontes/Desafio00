import React from 'react'

import styles from './Filtro.module.sass';

export const Filtro = () => {
    return (
        <div className=''>
            <div className=''>
                <form >
                    <label >
                        <span>Marca:</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Cor:</span>
                        <input type='text' />
                    </label>
                    <label>
                        <span>Ano:</span>
                    </label>
                    <div className={styles.containerinput}>
                        <label>
                            <span>Preço min.:</span>
                            <input type="number" name="" id="" />
                        </label>
                        <label>
                            <span>Preço máx.:</span>
                            <input type='number' />
                        </label>

                    </div>
                    <button>SALVAR</button>
                </form>
            </div>


        </div>
    )
}
