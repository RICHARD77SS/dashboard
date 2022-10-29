import React from 'react'
import BoxContent from "../BoxContent";
import BoxHeader from "../BoxHeader";
import Button from "../Button";
import Container from "../Container";
import FlexBetween from "../FlexBetween";
import Input from "../Input";
import Tab from "../Tab";
import TabsPerson from "../TabsPersons";
import { useParams, Link } from 'react-router-dom';
import { Top, Image, BasicInfos, Block, BlockContainer, Aside, Box, Group, Infos, RemoveConteiner, ModalContainer, Modal } from './styles'

import { useAxios } from '../../hooks/useAxios';
import PersonDetailsInfos from '../PersonDetailsInfos';
import PersonDetailsEdit from '../PersonDetailsEdit';
import { PersonContext } from '../../contexts/personContext';
import PersonDetailsAditionalFields from '../PersonDetailsAditionalFields';
import PersonDetailsFinancial from '../PersonDetailsFinancial';

const PersonDetails = () => {
  const { data } = useAxios('person')
  const { id } = useParams();
  const { handleDelete } = React.useContext(PersonContext);
  var date = new Date()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  var birthday = new Date(data?.person[`${id}`].birth)

  var age_now = year - birthday.getFullYear()
  var mont = month - birthday.getMonth()
  if (mont < 0 || (mont === 0 && day < birthday.getDate())) {
    age_now--;
  }

  var age_group = ''

  if (age_now >= 0 && age_now <= 12) {
    age_group = "Criança"
  }
  if (age_now >= 12 && age_now <= 18) {
    age_group = "Adolescente"
  }
  if (age_now >= 18 && age_now <= 28) {
    age_group = "Jovem"
  }
  if (age_now >= 28 && age_now <= 55) {
    age_group = "Adulto"
  }
  if (age_now >= 55 && age_now <= 145) {
    age_group = "Idoso"
  }

  let BirthDate = new Date(data?.person[`${id}`].birth)
  let Birth = BirthDate.toLocaleDateString();

  let ConversionDate = new Date(data?.person[`${id}`].conversion)
  let Conversion = ConversionDate.toLocaleDateString()

  const [modal, setModal] = React.useState(false);
  return (
    <Container >
      <Top>
        <Image>
          <img src={data?.person[`${id}`].image} alt="user" />
        </Image>
        <BasicInfos>
          <h2>{data?.person[`${id}`].name}</h2>
          <FlexBetween>
            <Block>
              <p><b>Idade:&nbsp;</b>{age_now}</p>
              <br />
              <p><b>Categorias:&nbsp;</b>{data?.person[`${id}`].category}</p>
              <br />
              <p><b>Cargos:&nbsp;</b>{data?.person[`${id}`].office}</p>
            </Block>
            <Block>
              <p><b>Endereço:&nbsp;</b>{data?.person[`${id}`].address},{data?.person[`${id}`].city},{data?.person[`${id}`].state},{data?.person[`${id}`].number}</p>
              <br />
              <p><b>Telefones:&nbsp;</b>{data?.person[`${id}`].phone1}, {data?.person[`${id}`].phone2}</p>
              <br />
              <p><b>E-mail:&nbsp;</b>{data?.person[`${id}`].email}</p>
            </Block>
          </FlexBetween>
        </BasicInfos>
        <Button>Imprimir</Button>
      </Top>
      <BlockContainer>
        <Aside>
          <Box>
            <BoxHeader title='Grupos'>

            </BoxHeader>
            <BoxContent>
              <Group>
                <img src="" alt="group " />
                <Block>
                  <p>Group name</p>
                  <p><span>Lider 1</span></p>
                </Block>
              </Group>
              <Group>
                <img src="" alt="" />
                <Block>
                  <p>Group name</p>
                  <p><span>Participante</span></p>
                </Block>
              </Group>
            </BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Ensino'></BoxHeader>
            <BoxContent></BoxContent>
          </Box>
          <Box>
            <BoxHeader title='Acompanhamento pessoal'></BoxHeader>
            <BoxContent>
              <Input type="text" disabled />
            </BoxContent>
          </Box>
        </Aside>
        <Infos>
          <TabsPerson>
            <Tab title='Informações'>
              <PersonDetailsInfos
                name={data?.person[`${id}`].name}
                birth={Birth}
                ageGroup={age_group}
                sex={data?.person[`${id}`].sex}
                schooling={data?.person[`${id}`].schooling}
                marital={data?.person[`${id}`].marital}
                document1={data?.person[`${id}`].document1}
                document2={data?.person[`${id}`].document2}
                category={data?.person[`${id}`].category}
                office={data?.person[`${id}`].office}
                conversion={Conversion}
                batizm={data?.person[`${id}`].baptized}
                dataCreation={data?.person[`${id}`].registerDate}
                phone1={data?.person[`${id}`].phone1}
                phone2={data?.person[`${id}`].phone2}
                email={data?.person[`${id}`].email}
                addres={data?.person[`${id}`].address}
                district={data?.person[`${id}`].district}
                number={data?.person[`${id}`].number}
                zipcode={data?.person[`${id}`].zipcode}
                city={data?.person[`${id}`].city}
                state={data?.person[`${id}`].state}
                country={data?.person[`${id}`].country}
                notes={data?.person[`${id}`].notes}
                group={data?.person[`${id}`].group}
              />
            </Tab>
            <Tab title='Campos adicionais'>
              <PersonDetailsAditionalFields />
            </Tab>
            <Tab title='Financeiro'>
              <PersonDetailsFinancial name={data?.person[`${id}`].name} />
            </Tab>
            <Tab title='Editar'>
              <PersonDetailsEdit
                name={data?.person[`${id}`].name}
                password={data?.person[`${id}`].password}
                birth={data?.person[`${id}`].birth}
                ageGroup={age_group}
                sex={data?.person[`${id}`].sex}
                schooling={data?.person[`${id}`].schooling}
                marital={data?.person[`${id}`].marital}
                document1={data?.person[`${id}`].document1}
                document2={data?.person[`${id}`].document2}
                category={data?.person[`${id}`].category}
                office={data?.person[`${id}`].office}
                conversion={data?.person[`${id}`].conversion}
                batizm={data?.person[`${id}`].baptized}
                dataCreation={data?.person[`${id}`].registerDate}
                phone1={data?.person[`${id}`].phone1}
                phone2={data?.person[`${id}`].phone2}
                email={data?.person[`${id}`].email}
                addres={data?.person[`${id}`].address}
                district={data?.person[`${id}`].district}
                number={data?.person[`${id}`].number}
                zipcode={data?.person[`${id}`].zipcode}
                city={data?.person[`${id}`].city}
                state={data?.person[`${id}`].state}
                country={data?.person[`${id}`].country}
                id={data?.person[`${id}`]._id}
                group={data?.person[`${id}`].group}
                notes={data?.person[`${id}`].notes}
              />
            </Tab>
            <Tab title='Permissões'>

            </Tab>
            <Tab title='Remover'>
              <RemoveConteiner>
                <h3>Está ação não podera ser desfeita</h3>
                <Button onClick={() => setModal(true)}>Remover usuario</Button>
                {modal ?
                  <ModalContainer>
                    <Modal>
                      <Link to='/people'><Button onClick={() => handleDelete(data?.person[`${id}`]._id)}>Remover</Button></Link>
                      <Button onClick={() => setModal(false)}>Cancelar</Button>
                    </Modal>
                  </ModalContainer>
                  : null}
              </RemoveConteiner>
            </Tab>
          </TabsPerson>
        </Infos>
      </BlockContainer>
    </Container>
  )
}

export default PersonDetails;