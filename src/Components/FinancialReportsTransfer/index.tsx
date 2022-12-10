import { useAxios } from "../../hooks/useAxios";
import Container from "../Container";
import Flex from "../Flex";
import Input from "../Input";
import PageSelector from "../PageSelector";
import ReportsHeader from "../ReportsHeader";
import Table from "../Table";
import TableContainer from "../TableContainer";
import TableDirection from "../TableDirection";
import Tbody from "../Tbody";
import Td from "../Td";
import Th from "../Th";
import Thead from "../Thead";
import TopTableOptions from "../TopTableOptions";
import Tr from "../Tr";
import { Hr, ResumeBox, ResumeFlex, ResumeBlock, ResumeContent } from "./styles";
import React from 'react'

const FinancialReportsTransfer = () => {
  const { data } = useAxios('transfer')

  let dateNow = new Date()
  var day = dateNow.getDate()
  var month = dateNow.getMonth() + 1
  var year = dateNow.getFullYear()
  const [financialMonth, setFinancialMonth] = React.useState(month.toString())
  const [financialYear, setFinancialYear] = React.useState(year.toString())
  function monthValueHandler(event: any) {
    setFinancialMonth(event.target.value)
  }
  function yearValueHandler(event: any) {
    setFinancialYear(event.target.value)
  }

  let transferencia = data?.transfer.map((transfer: any) => {
    let monthTable = new Date(transfer.date).getMonth() + 1
    let yearTable = new Date(transfer.date).getFullYear()
    return monthTable.toString() === financialMonth && yearTable.toString() === financialYear ? transfer.value : 0
  }
  ).reduce((acc: number, item: number) => acc + item)


  return (
    <Container>
      <ReportsHeader logo='' corporation='Inc name' reportsName='Fluxo de caixa - Transferências' />
      <h4>Período: 01/09/2022 à 30/12/2022</h4>
      <select title='year' onChange={(event) => yearValueHandler(event)}>
        <option value={year} >{year}</option>
        <option value={year - 1} >{year - 1}</option>
        <option value={year - 2} >{year - 2}</option>
        <option value={year - 3} >{year - 3}</option>
        <option value={year - 4} >{year - 4}</option>
        <option value={year - 5} >{year - 5}</option>
      </select>
      <select title='month' value={financialMonth} onChange={(event) => monthValueHandler(event)}>
        <option value='1' >Janeiro</option>
        <option value='2' >Fevereiro</option>
        <option value='3' >Março</option>
        <option value='4' >Abril</option>
        <option value='5' >Maio</option>
        <option value='6' >Junho</option>
        <option value='7' >Julho</option>
        <option value='8' >Agosto</option>
        <option value='9' >Setembro</option>
        <option value='10' >Outubro</option>
        <option value='11' >Novembro</option>
        <option value='12' >Dezembro</option>
      </select>
      <TopTableOptions>
      </TopTableOptions>
      <Flex>
        <label htmlFor="search">Pesquisar</label>
        <Input type='search' />
      </Flex>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Data <TableDirection /></Th>
              <Th>Descrição <TableDirection /></Th>
              <Th>Total <TableDirection /></Th>
              <Th>Categoria <TableDirection /></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.transfer.map((transfer: any, index: number) => {
              return (
              <Tr>
                <Td>{transfer.date.split('T')[0]}</Td>
                <Td>{transfer.anotation}</Td>
                <Td>{transfer.value}</Td>
                <Td> </Td>
              </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <PageSelector />
      <br />
      <br />
      <h3>Resumo</h3>
      <ResumeBox>
        <ResumeFlex>
          <ResumeBlock>
            <ResumeContent>
              <h4>Saldo anterior</h4>
              <p>Em 31/08/2022</p>
            </ResumeContent>
            <ResumeContent>
              <h4>Total de receitas no período</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>Total de despesas no período</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>A receber</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>A pagar</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>Transferências enviada</h4>
            </ResumeContent>
            <ResumeContent>
              <h4>Transferências recebida</h4>
            </ResumeContent>
            <ResumeContent>
              <h3>Saldo final</h3>
              <p>em 30/12/2022</p>
            </ResumeContent>
          </ResumeBlock>
          <ResumeBlock>
            <ResumeContent>
              <h4><span>R$ 1.000,00</span></h4>
              <br />
            </ResumeContent>
            <ResumeFlex>
              <ResumeBlock>
                <ResumeContent>
                  <pre><h4><span>R$ 1.000,00</span></h4></pre>
                </ResumeContent>
                <ResumeContent>
                  <h4><span>- R$ 0,00</span></h4>
                </ResumeContent>
              </ResumeBlock>
              <ResumeContent>
                <h4><span>= R$ 1.000,00</span></h4>
              </ResumeContent>
            </ResumeFlex>
            <ResumeFlex>
              <ResumeBlock>
                <ResumeContent>
                  <pre><h4><span>R$ 1.000,00</span></h4></pre>
                </ResumeContent>
                <ResumeContent>
                  <h4><span>- R$ 0,00</span></h4>
                </ResumeContent>
              </ResumeBlock>
              <ResumeContent>
                <h4><span>= R$ 1.000,00</span></h4>
              </ResumeContent>
            </ResumeFlex>
            <ResumeFlex>
              <ResumeBlock>
                <ResumeContent>
                  <pre><h4><span>R$ 2.000,00</span></h4></pre>
                </ResumeContent>
                <ResumeContent>
                  <h4><span>- R$ 0,00</span></h4>
                </ResumeContent>
              </ResumeBlock>
              <ResumeContent>
                <h4><span>= R$ 2.000,00</span></h4>
              </ResumeContent>
            </ResumeFlex>
            <ResumeContent>
              <h3>R$ 1.000,00</h3>
              <br />
            </ResumeContent>
          </ResumeBlock>
        </ResumeFlex>
        <ResumeContent>
          <h4>O resultado apresentado é baseado nos filtros selecionados no topo da página.</h4>
        </ResumeContent>
      </ResumeBox>
    </Container>
  )
}

export default FinancialReportsTransfer;