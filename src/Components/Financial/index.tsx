import { FiAlertOctagon } from 'react-icons/fi';
import { GiConfirmed } from 'react-icons/gi';
import { CgSandClock } from 'react-icons/cg';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import Button from '../Button';
import Container from '../Container'
import { AiFillTags, AiOutlineFolderOpen, AiOutlineSearch } from 'react-icons/ai';
import Input from '../Input';
import { FaCreditCard } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { Content, Flex, Flex2, MiniBox, HeaderMiniBox, ContentMiniBox, ButtonContainer, Block, MidBox, MidHeader, MidContent, Pagamentos,Graph } from './styles'

const Financial = () => {
  return (
    <Container>
      <h3>Financias</h3>
      <Content>
        <Flex>
          <MiniBox>
            <HeaderMiniBox>
              <h3><GiConfirmed /> Recebido hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>R$ 0,00</h3>
              <p>Total do mes: R$ 0,00</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox >
            <HeaderMiniBox className='red'>
              <h3><GiConfirmed /> Pago hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>R$ 0,00</h3>
              <p>Total do mes: R$ 0,00</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>

          <MiniBox>
            <HeaderMiniBox>
              <h3><FiAlertOctagon /> A receber hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>R$ 0,00</h3>
              <p>Total do mes: R$ 0,00</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox>
            <HeaderMiniBox className='red'>
              <h3><FiAlertOctagon /> A pagar hoje</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>R$ 0,00</h3>
              <p>Total do mes: R$ 0,00</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>

          <MiniBox>
            <HeaderMiniBox>
              <h3><CgSandClock /> Recebimento em atraso</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>R$ 0,00</h3>
              <p>Total do mes: R$ 0,00</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
          <MiniBox>
            <HeaderMiniBox className='red'>
              <h3><CgSandClock /> Pagamento em atraso</h3>
            </HeaderMiniBox>
            <ContentMiniBox>
              <h3>R$ 0,00</h3>
              <p>Total do mes: R$ 0,00</p>
              <ButtonContainer>
                <Button><p>Hoje</p></Button>
                <Button><p>+7 dias</p></Button>
                <Button><p>+1 mês</p></Button>
                <Button><p>+3 meses</p></Button>
              </ButtonContainer>
            </ContentMiniBox>
          </MiniBox>
        </Flex>
        <Block>
          <MidBox>
            <Input type='text' placeholder='  Pesquisar transações' />
            <Input type='text' list='time' placeholder='  Periodo' />
            <datalist id='time'>
              <option value='Neste mês' />
              <option value='Neste ano' />
              <option value='Ano passado ' />
              <option value='Ultimos 3 anos' />
              <option value='Proximos 3 anos' />
            </datalist>
            <Button className='buscar'><AiOutlineSearch /> Pesquisar</Button>
          </MidBox>
          <MidBox>
            <ButtonContainer>
              <Button><RiMoneyDollarCircleLine /> Transações</Button>
              <Button><AiFillTags />Categorias</Button>
              <Button><FaCreditCard />Contas</Button>
              <Button><MdContacts />Contatos</Button>
              <Button><AiOutlineFolderOpen />Centros de custos</Button>
              <Button><BsGraphUp />Relatórios</Button>
            </ButtonContainer>
          </MidBox>
          <MidBox>
            <MidHeader>
              <h3>Saldo atual <p>(Todas as contas)</p></h3>
              <Button>+ Receitas</Button>
              <Button>+ Dispesa</Button>
            </MidHeader>
            <MidContent>
              <h3>R$ 0,00</h3>
              <Pagamentos>

              </Pagamentos>
            </MidContent>
          </MidBox>
        </Block>
      </Content>
      <Flex2>
        <MidBox>
          <MidHeader>
            <h3>Resumo anual</h3>
            <Input type='text' list='year' placeholder='  Periodo' />
            <datalist id='year'>
              <option value='2022' />
              <option value='2021' />
              <option value='2020' />
              <option value='2019' />
              <option value='2018' />
            </datalist>
          </MidHeader>
          <MidContent>
            <Graph>

            </Graph>
          </MidContent>
        </MidBox>
        <MidBox>
          <MidHeader>
            <h3>Resumo mensal</h3>
            <Input type='text' list='month' placeholder='  Periodo' />
            <datalist id='month'>
              <option value='setembro - 2022' />
              <option value='agosto - 2022' />
              <option value='julho - 2022' />
              <option value='junho - 2022' />
              <option value='maio - 2022' />
              <option value='abril - 2022' />
              <option value='março - 2022' />
              <option value='fevereiro - 2022' />
              <option value='janeiro - 2022' />
            </datalist>
          </MidHeader>
          <MidContent>
            <Graph>

            </Graph>
          </MidContent>
        </MidBox>
      </Flex2>
    </Container>
  )
}

export default Financial;