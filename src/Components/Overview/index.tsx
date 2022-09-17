import { GiGreekTemple } from "react-icons/gi"
import { BiGroup } from "react-icons/bi"
import { FaGraduationCap } from "react-icons/fa"
import Button from "../Button"
import Input from "../Input"
import { Container } from "./styles"

const Overview = () => {
  return (
    <Container>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Mural</h3>
            <Button>Ver mais</Button>
          </BoxHeader>
          <BuxContent>
            <h4>Não há dados disponiveis</h4>
            <Button>+Adicionar items</Button>
          </BuxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Calendário</h3>
            <Button>Ver mais</Button>
          </BoxHeader>
          <BoxContent>
            <h4>Não há dados disponiveis</h4>
            <Button>+Adicionar item</Button>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Anotações</h3>
            <Button>Ver mais</Button>
          </BoxHeader>
          <BoxContent>
            <h4>Não há dados disponiveis</h4>
            <Button>+Adicionar anotação</Button>
          </BoxContent>
        </Box>
      </Content>

      <Content>
        <BoxRet>
          <BoxRetHeader>
            <Input type='checkbox' />
            <h3>Ativar site</h3>
            <Button>Salvar</Button>
          </BoxRetHeader>
          <BoxRetContent>
            <DivLink>
              <h4>www.link.com/</h4>
            </DivLink>
            <Input type='text' />
            <DivLink>
              <p>(Apenas letras, números e underline)</p>
            </DivLink>
          </BoxRetContent>
        </BoxRet>

        <BoxRet>
          <BoxRetHeader>
            <Input type='checkbox' />
            <h3>Link de cadastro público</h3>
            <Button>Habilitar</Button>
          </BoxRetHeader>
          <BoxRetContent>
            <LinkPub>
              <p>Ativar link público para que as pessoas se cadastrem diretamente.</p>
              <span>https://www.link.com/ref</span>
            </LinkPub>
          </BoxRetContent>
        </BoxRet>
      </Content>

      <BoxGrid>
        <RetBox>
          <Div>
            <FiUsers />
            <h3>1</h3>
            <p>Total de pessoas</p>
          </Div>
          <Div>
            <FiUser />
            <h3>0.0% <span>(0)</span> </h3>
            <p>Total de Homens</p>
          </Div>
          <Div>
            <FiUser />
            <h3>0.0% <span>(0)</span></h3>
            <p>Total de Mulheres </p>
          </Div>
        </RetBox>
        <Box>
          <BoxHeader>
            <h3>Categorias de pessoas</h3>
            <Button>Ver todos</Button>
          </BoxHeader>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Faixa etária</h3>
          </BoxHeader>
          <BoxFooter>
            <Classification>
              <BoxColor></BoxColor>
              <p>Crianças</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Adolescentes</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Jovens</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Adultos</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Idosos</p>
            </Classification>
          </BoxFooter>
        </Box>

        <Cad>
          <CadHeader>
            <h3>Cadastros</h3>
            <Button>Ver todos</Button>
          </CadHeader>
          <CadContent>
            
          </CadContent>
        </Cad>
        <Graph>
          <GraphHeader>
            <h3>Novos</h3>
            <Datalist>
              <Input type='text' />

            </Datalist>
          </GraphHeader>
          <GraphContent>
            <Data>
              <Classification>
                <BoxColor></BoxColor>
                <p>Ano atual</p>
              </Classification>
              <Classification>
                <BoxColor></BoxColor>
                <p>Ano anterior</p>
              </Classification>
            </Data>
            <Graph>

            </Graph>
          </GraphContent>
        </Graph>
        <Birt>
          <BirtHeader>
            <h3>Birt</h3>
            <Button>Ver todos</Button>
          </BirtHeader>
          <BirtContent>

          </BirtContent>
        </Birt>
      </BoxGrid>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Situação</h3>
          </BoxHeader>
          <BoxContent>
            <Status>
              <Situation>
                <p>Todos</p>
                <h2>0</h2>
                <p>100%</p>
              </Situation>
              <Situation>
                <p>Ativos</p>
                <h2>0</h2>
                <p>NaN%</p>
              </Situation>
              <Situation>
                <p>Inativos</p>
                <h2>0</h2>
                <p>NaN%</p>
              </Situation>
            </Status>
            <p>Grupos que enviaram frequência de reunião nos últimos 30 dias são automaticamente marcados como ATIVOS.</p>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Categorias de grupos</h3>
            <Button>Ver todos</Button>
          </BoxHeader>
          <BoxContent>
            
          </BoxContent>
          <BoxFooter>
            <Classification>
              <BoxColor></BoxColor>
              <p>Crianças</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Adolescentes</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Jovens</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Adultos</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Casais</p>
            </Classification>
            <Classification>
              <BoxColor></BoxColor>
              <p>Famílias</p>
            </Classification>
          </BoxFooter>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Reuniões</h3>
            <Button>Ver todos</Button>
          </BoxHeader>
          <BoxContent>

          </BoxContent>
        </Box>
      </Content>
      <Content>
        <Box>
          <BoxHeader>
            <h3>Estudos</h3>
            <Button>Ver todos</Button>
          </BoxHeader>
          <BoxContent>

          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Escolas</h3>

          </BoxHeader>
          <BoxContent>
            <Description>
              <p><GiGreekTemple /></p>
              <p>Total de escolas</p>
              <p>0</p>
            </Description>
            <Description>
              <p><FaGraduationCap /></p>
              <p>Total de turmas</p>
              <p>0</p>
            </Description>
            <Description>
              <p><BiGroup /></p>
              <p>Total de alunos</p>
              <p>0</p>
            </Description>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader>
            <h3>Acompanhamento</h3>
          </BoxHeader>
          <BoxContent>
            <Div>
              <Description>
                <p>Em andamento</p>
                <p>0</p>
              </Description>
              <Output></Output>
            </Div>
            <Div>
              <Description>
                <p>Concluído</p>
                <p>0</p>
              </Description>
              <Output></Output>
            </Div>
            <Div>
              <Description>
                <p>Atrasados</p>
                <p>0</p>
              </Description>
              <Output></Output>
            </Div>
          </BoxContent>
        </Box>
      </Content>
    </Container>
  )
}
export default Overview
