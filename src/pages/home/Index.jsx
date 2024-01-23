import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { InfoTable } from "../../components/InfoTable/Index"
import { Information } from "../../components/Informations"
import { InputContainer } from "../../components/InputsContainer/Index"
import { api } from "../../services/api"
import './styles.css'

export const Home = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        api.get('/listar/financa/0').then(response => {
            console.log(response.data.rows)
            setList(response.data.rows)
        })
    }, [])

    async function handleSaveItens(item) {
        const data = item.dados;
    
        try {
            await api.post('/criar/financa', data);
            const response = await api.get('/listar/financa/0');
            console.log(response.data.rows);
            setList(response.data.rows);
        } catch (error) {
            console.error('Erro ao salvar ou buscar dados:', error);
        }
    }
    

    return (
            <div className="container">
                <Header />
                <Information list={list}/>
                <InputContainer addItens={handleSaveItens} />
                <InfoTable list={list} />
            </div>
        )
    }