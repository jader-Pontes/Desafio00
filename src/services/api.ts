import axios from "axios";
import { useEffect } from "react";


const http = axios.create({
    baseURL: "http://localhost:3000/",
});

export const api = {

    getAllCars: async () => {
        let response = await http.get('/veiculos');
        return response.data;
    },
    AddNewCar: async (nome: string, marca: string, cor: string, ano: number, placa: string) => {
        let response = await http.post('/veiculos', {
            nome, marca, cor, ano, placa
        });
        return response.data;
    },
    deleteCarId: async (id: number) => {
        let reponse = await http.delete(`/veiculos/${id}`)
    },
    updateCar: async (id: number, nome: string, marca: string, cor: string, ano: number, placa: string) => {
        let reponse = await http.put(`/veiculos/${id}`, {
            nome, marca, cor, ano, placa
        })
    }

}

