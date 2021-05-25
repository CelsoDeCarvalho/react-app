import React from "react";
import {Cards,CountryPicker,NavBar} from "./components/Importacoes";
import styles from './App.module.css';
import {fetchData} from "./api/index"
import foto from './images/image.png';

class App extends React.Component {


    state = {
        //Declarando um objeto de dados vazio
        data:{},
        country:'',
    }

    async componentDidMount() {
        const dataFecth = await fetchData();
        //Passando data para o obejeto dados
        this.setState({data: dataFecth});
    }

    //Pegando o nome do pais
    handlerCountryChange = async(country) => {
        const dataFecth = await fetchData(country);
        //Passando data para o obejeto dados
        this.setState({data: dataFecth,country:country});
    }

    render() {

        const {data} = this.state;
        return(
            <div className={styles.container}>
                <NavBar/>
                <img className={styles.image} src={foto} alt="foto de covid-19"/>
               <Cards data={data} />
               <CountryPicker handlerCountryChange={this.handlerCountryChange}/>
            </div>
        );
    }
}

export default App;
