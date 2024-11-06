import { useEffect, useState } from "react";
import SelectPosto from "../form/SelectPosto";

function PessoaForm() {

    const [pessoa, setPessoa] = useState({});
    const [listaPostos, setListaPostos] = useState([]);

    useEffect(
        () => {
            setTimeout(() => {
                fetch('http://localhost:8080/posto/listAllActives', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Basic ' + btoa('operadorom:academy'),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setListaPostos(data)
                    })
                    .catch(err => console.log(err))
            }, 300)
        }, []
    )

    function handleCategory(e) {
        setPessoa({
            ...pessoa,
            posto: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        });
    }

    return (
        <>
            <h1>Cadastro de usuário</h1>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="text"
                    text="Nome"
                    name="nome"
                    placeholder="Insira o nome completo"
                    handleOnChange={handleChange}
                    value={pessoa.nome ? pessoa.nome : ''}
                />
                <Input
                    type="number"
                    text="Orçamento do Projeto"
                    name="budget"
                    placeholder="Insira o orçamento total"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                />
                <SelectPosto
                    name="posto_id"
                    text="Selecione o posto"
                    options={listaPostos}
                    handleOnChange={handleCategory}
                    value={pessoa.posto ? pessoa.posto.id : ''}
                />
                <SubmitButton text={btnText} />
            </form>
        </>
    );
}

export default PessoaForm