import { Flex, Typography, Space, Avatar } from "antd";
import { useContext, useEffect, useState } from "react"
import { Checkbox, Select, Option, FormProvider } from "../Tools/FormProvider"
import { FaCheck } from "react-icons/fa"
import { Saldo } from "../Despesas/Saldo"
import { getInitial } from "../../layouts/DashboardLayout";
import { ModelContext } from "../Tools/ModelProvider";
import { SaveButton } from "../CardItem/SaveButton";
import { CloseEditButton } from "../CardItem/CloseEditButton";
import { RemoveButton } from "../CardItem/RemoveButton";
import { EditButton } from "../CardItem/EditButton";

const { Text } = Typography

export function Morador(props) {

    const [editMode, setEditMode] = useState(false)
    const { editItem, removeItem } = props

    const model = useContext(ModelContext)
    const [acomodacoes, setAcomodacoes] = useState([])
    model.subscribe('acomodacoes', setAcomodacoes)
    useEffect(() => {
        model.dispatch('acomodacoes.set')
    }, [])
    const index = acomodacoes.findIndex(quarto => {
        return quarto.moradores.includes(props.morador.nome)
    })
    function setQuarto(inputs) {
        const quarto = inputs.has('quarto') ? inputs.get('quarto') : -1
        const newAcomodacoes = Array.from(acomodacoes)
        if ((quarto >= 0 && quarto < acomodacoes.length)
            && !acomodacoes[quarto].moradores.includes(props.morador.nome)
            && acomodacoes[quarto].moradores.length < acomodacoes[quarto].lugares) {
            newAcomodacoes[quarto].moradores.push(props.morador.nome)
            if (index >= 0) {
              newAcomodacoes[index].moradores = newAcomodacoes[index].moradores.filter((morador) => morador !== props.morador.nome)
            }
            model.dispatch('acomodacoes.set', newAcomodacoes)
        }
    }
    function selectQuarto() {
        return (
            <>
                <Text type="secondary">Quarto </Text>
                <Select value={index} name='quarto' >
                    <Option value={-1} name='quarto' >
                        nenhum
                    </Option>
                    {
                        acomodacoes.map((quarto, index) => {
                            return (quarto.moradores.includes(props.morador.nome) && index + 1)
                                || (quarto.moradores.length < quarto.lugares && index + 1) || 0
                        })
                            .filter(index => index > 0)
                            .map(index => <Option key={index} value={index - 1} name='quarto' >{index}</Option>)
                    }
                </Select>
            </>
        )
    }

    return (
        <FormProvider>
            <div className="resident-card-content">

                <>
                    <Flex gap={16} align="center" wrap>
                        <Avatar className="resident-avatar" size={48}>
                            {getInitial(props.morador.nome)}
                        </Avatar>
                        <Flex vertical>
                            <Text strong className="resident-name">
                                {props.morador.nome}
                            </Text>
                            <Space size="middle">
                                {
                                    editMode
                                        ? selectQuarto()
                                        : <>
                                            <Text type="secondary">
                                                Quarto {(index + 1) || 'nenhum'}
                                            </Text>
                                            <Text type="secondary">•</Text>
                                            <Text type="secondary">{props.morador.telefone}</Text>
                                        </>
                                }
                                {
                                    editMode
                                        ? <>
                                            <Text type="secondary">Administrador: </Text>
                                            <Checkbox name='administrador' checked={props.morador.administrador} />
                                        </>
                                        : props.morador.administrador
                                        && (
                                            <>
                                                <Text type="secondary">•</Text>
                                                <Text type="secondary">Administrador <FaCheck /></Text>

                                            </>
                                        )
                                }
                            </Space>
                        </Flex>
                    </Flex>

                    {
                        !editMode
                        && <Flex align="center" gap={32}>
                            <Flex vertical align="end">
                                <span>
                                    <Text strong className="resident-value">
                                        Saldo: 
                                    </Text>

                                    <Text>
                                        {' R$'} <Saldo nomeMorador={props.morador.nome} />
                                    </Text>
                                </span>
                            </Flex>
                        </Flex>
                    }
                </>
            </div>

            {
                editMode
                    ? <Flex vertical gap={8}>
                        <SaveButton editItem={(inputs) => {
                            setQuarto(inputs)
                            editItem(inputs)
                        }} setEditMode={setEditMode} />
                        <RemoveButton removeItem={removeItem} setEditMode={setEditMode} />
                        <CloseEditButton setEditMode={setEditMode} />
                    </Flex>
                    : <EditButton setEditMode={setEditMode} />
            }
        </FormProvider>

    )
}