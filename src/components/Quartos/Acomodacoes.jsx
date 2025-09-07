import "../styles/ListItem.css"
import { useState, useContext } from "react"
import { CadastroAcomodacao } from "../CadastroAcomodacao"
import { Acomodacao } from "./Acomodacao"
import { AddItem } from "./AddItem"
import { ModelContext } from "../Tools/ModelProvider"

export function Acomodacoes(props) {
    const model = useContext(ModelContext)
    const [acomodacoes, setAcomodacoes] = useState([])
    model.subscribe('acomodacoes', setAcomodacoes)
    function setAcomodacao (index, inputs) {
        const newAcomodacoes = Array.from(acomodacoes)
        const acomodacao = acomodacoes[index]
        newAcomodacoes[index] = {
            lugares: inputs.has('lugares') ? Number(inputs.get('lugares')) : acomodacao.lugares,
            suite: inputs.has('suite') ? inputs.get('suite') : acomodacao.suite,
            mobilia: inputs.has('mobilia') ? inputs.get('mobilia') : acomodacao.mobilia,
            moradores: acomodacao?.moradores ?? []
        }
        model.dispatch('acomodacoes.set', newAcomodacoes)
    }
    function addAcomodacao(inputs) {
        setAcomodacao(acomodacoes.length, inputs)
    }
    function createRemove(index) {
        return function removeAcomodacao() {
            acomodacoes.splice(index, 1)
            setAcomodacoes(Array.from(acomodacoes))
        }
    }
    function createEdit(index) {
        return function editAcomodacao(inputs) {
            setAcomodacao(index, inputs)
        }
    }
    const activeModal = { out: () => { } }
    return (
        <>
            <ol>
                {
                    acomodacoes.map((acomodacao, index) => {
                        return <li className='list-item' key={index}>
                            <Acomodacao moradores={acomodacao.moradores} lugares={acomodacao.lugares} suite={acomodacao.suite} mobilia={acomodacao.mobilia} editItem={createEdit(index)} removeItem={createRemove(index)} />
                        </li>
                    })
                }
            </ol>
            <AddItem activeModal={activeModal}>
                <CadastroAcomodacao activeModal={activeModal} addAcomodacao={addAcomodacao} />
            </AddItem>
            <p className='text-item'>
                Vagas: {acomodacoes.reduce((vagas, acomodacao) => vagas + acomodacao.lugares - acomodacao.moradores.length, 0)}
            </p>
            <input className='add-item' type='button' value='Publicar vagas' />
        </>
    )
}