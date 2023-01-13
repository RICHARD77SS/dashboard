import React from 'react';
import Block from "../Block"
import BoxHeader from "../BoxHeader"
import Button from "../Button"
import CardFront from '../CardFront';

import Flex from "../Flex"
import Input from "../Input"

import { BoxFlex, Side, Make, CardContent, BgButton, Backgrounds, Bg, Content, Box, BoxContent } from './styles'
import CardBack from '../CardBack';
import { PersonalCardContext } from './../../contexts/personalCardContext';
import Form from '../Form';
import InputBlock from '../InputBlock';

const CardMake = () => {

  const {
    name,
    frontBgColor,
    frontBgImage,
    frontTitleColor,
    frontTextColor,
    frontSpanColor,
    backBgImage,
    backBgColor,
    backTitleColor,
    backTextColor,
    backSpanColor,
    nameHandler,
    frontBgColorHandler,
    frontTitleColorHandler,
    frontTextColorHandler,
    frontSpanColorHandler,
    backBgColorHandler,
    backTitleColorHandler,
    backTextColorHandler,
    backSpanColorHandler,
    setFrontBgImage,
    setBackBgImage,
    handleSubmit
  } = React.useContext(PersonalCardContext)


  const [selectedImage, setSelectedImage] = React.useState<File>();
  const [selectedImageBack, setSelectedImageBack] = React.useState<File>();

  if (selectedImage) {
    var url = URL.createObjectURL(selectedImage)
  } else {
    var url = ''
  }
  if (selectedImageBack) {
    var url2 = URL.createObjectURL(selectedImageBack)
  } else {
    var url2 = ''
  }
  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <br />
      <br />
      <Block>
        <Box>
          <BoxHeader title='Frente do cartão'>
            <Input placeholder='Nome do cartão' type='text' value={name} onChange={nameHandler} />
            <Flex>
              <Button type='submit'>Salvar</Button>
              <Button>Cancelar</Button>
            </Flex>
          </BoxHeader>
          <BoxContent>
            <Make>
              <CardContent>
                <CardFront cardBg={frontBgImage}
                  bgColor={frontBgColor}
                  titleColor={frontTitleColor}
                  textColor={frontTextColor}
                  spanColor={frontSpanColor} />
                <Backgrounds>
                  {selectedImage && (
                    <BgButton type='button' onClick={() => { setFrontBgImage(`${url}`) }}>
                      <Bg>
                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                        <button type='button' onClick={() => setSelectedImage(undefined)}>Remove</button>
                      </Bg>
                    </BgButton>
                  )}
                  <BgButton type='button' onClick={() => { setFrontBgImage('') }}>
                    <Bg>
                      <h5>Fazer upload<br /> de imagem</h5>
                      <Input type="file"
                        name="myImage"
                        onChange={(event) => {
                          setSelectedImage(event.target.files![0]);
                        }} />
                    </Bg>
                  </BgButton>
                  <BgButton type='button' onClick={() => { setFrontBgImage("https://img.freepik.com/fotos-gratis/jovem-viajante-caminhando-sozinho-com-espaco-de-copia_23-2149119538.jpg?w=740&t=st=1664830923~exp=1664831523~hmac=562f24a6e30554a5e66b1418d3b2143267d707d8ef6c6dd3337275f055a39172") }}>
                    <Bg>
                      <img src="https://img.freepik.com/fotos-gratis/jovem-viajante-caminhando-sozinho-com-espaco-de-copia_23-2149119538.jpg?w=740&t=st=1664830923~exp=1664831523~hmac=562f24a6e30554a5e66b1418d3b2143267d707d8ef6c6dd3337275f055a39172" alt="" />
                    </Bg>
                  </BgButton>
                  <BgButton type='button' onClick={() => { setFrontBgImage("https://img.freepik.com/fotos-gratis/foto-hipnotizante-de-uma-colina-rochosa-verde-durante-a-bela-hora-do-por-do-sol_181624-30359.jpg?w=740&t=st=1664826956~exp=1664827556~hmac=379cae0afc720e8cc279890186249068cddfc26bc2896b5451dc66ea8943892e") }}>
                    <Bg>
                      <img src="https://img.freepik.com/fotos-gratis/foto-hipnotizante-de-uma-colina-rochosa-verde-durante-a-bela-hora-do-por-do-sol_181624-30359.jpg?w=740&t=st=1664826956~exp=1664827556~hmac=379cae0afc720e8cc279890186249068cddfc26bc2896b5451dc66ea8943892e" alt="" />
                    </Bg>
                  </BgButton>
                  <BgButton type='button' onClick={() => setFrontBgImage("https://img.freepik.com/fotos-gratis/jovem-viajante-curtindo-ambiente-rural_23-2149125547.jpg?w=740&t=st=1664826984~exp=1664827584~hmac=727c5a1370210628462a9c4fe51c9c3c5a13b05d437d124f4bce227db53036d3")}>
                    <Bg>
                      <img src="https://img.freepik.com/fotos-gratis/jovem-viajante-curtindo-ambiente-rural_23-2149125547.jpg?w=740&t=st=1664826984~exp=1664827584~hmac=727c5a1370210628462a9c4fe51c9c3c5a13b05d437d124f4bce227db53036d3" alt="" />
                    </Bg>
                  </BgButton>
                </Backgrounds>
              </CardContent>
              <Side>
                <InputBlock>
                  <Input type='color' value={frontTitleColor} onChange={frontTitleColorHandler} />
                  <p>Titulos e<br /> legenda</p>
                </InputBlock>
                <InputBlock>
                  <Input type='color' value={frontTextColor} onChange={frontTextColorHandler} />
                  <p>Texto<br /> dentro dos</p>
                </InputBlock>
                <InputBlock>
                  <Input type='color' value={frontSpanColor} onChange={frontSpanColorHandler} />
                  <p>Texto<br /> Personalizado</p>
                </InputBlock>
                <InputBlock>
                  <Input type='color' value={frontBgColor} onChange={frontBgColorHandler} />
                  <p>Fundo do<br /> cartão</p>
                </InputBlock>
              </Side>
            </Make>
          </BoxContent>
        </Box>
        <Box>
          <BoxHeader title='Verso do cartão'>
          </BoxHeader>
          <BoxContent>
            <BoxFlex>
              <Make>
                <CardContent>
                  <CardBack cardBg={backBgImage}
                    bgColor={backBgColor}
                    titleColor={backTitleColor}
                    textColor={backTextColor}
                    spanColor={backSpanColor} />
                  <Backgrounds>
                    {selectedImageBack && (
                      <BgButton type='button' onClick={() => { setBackBgImage(`${url2}`) }}>
                        <Bg>
                          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImageBack)} />
                          <button type='button' onClick={() => setSelectedImageBack(undefined)}>Remove</button>
                        </Bg>
                      </BgButton>
                    )}
                    <BgButton type='button' onClick={() => { setBackBgImage('') }}>
                      <Bg>
                        <h5>Fazer upload<br /> de imagem</h5>
                        <Input type="file"
                          name="myImage"
                          onChange={(event) => {
                            setSelectedImageBack(event.target.files![0]);
                          }} />
                      </Bg>
                    </BgButton>
                    <BgButton type='button' onClick={() => { setBackBgImage("https://img.freepik.com/fotos-gratis/retrato-de-um-lindo-cao-pastor-australiano-domestico-marrom-e-branco-posando-na-natureza-ao-por-do-sol_181624-59364.jpg?w=740&t=st=1664825293~exp=1664825893~hmac=f9c0003db67e0a60bc7093ec9add1752891382f84d78b527ac6d7ea18759f579") }}>
                      <Bg>
                        <img src="https://img.freepik.com/fotos-gratis/retrato-de-um-lindo-cao-pastor-australiano-domestico-marrom-e-branco-posando-na-natureza-ao-por-do-sol_181624-59364.jpg?w=740&t=st=1664825293~exp=1664825893~hmac=f9c0003db67e0a60bc7093ec9add1752891382f84d78b527ac6d7ea18759f579" alt="" />
                      </Bg>
                    </BgButton>
                    <BgButton type='button' onClick={() => { setBackBgImage("https://img.freepik.com/fotos-gratis/foto-hipnotizante-de-uma-colina-rochosa-verde-durante-a-bela-hora-do-por-do-sol_181624-30359.jpg?w=740&t=st=1664826956~exp=1664827556~hmac=379cae0afc720e8cc279890186249068cddfc26bc2896b5451dc66ea8943892e") }}>
                      <Bg>
                        <img src="https://img.freepik.com/fotos-gratis/foto-hipnotizante-de-uma-colina-rochosa-verde-durante-a-bela-hora-do-por-do-sol_181624-30359.jpg?w=740&t=st=1664826956~exp=1664827556~hmac=379cae0afc720e8cc279890186249068cddfc26bc2896b5451dc66ea8943892e" alt="" />
                      </Bg>
                    </BgButton>
                    <BgButton type='button' onClick={() => { setBackBgImage("https://img.freepik.com/fotos-gratis/jovem-viajante-curtindo-ambiente-rural_23-2149125547.jpg?w=740&t=st=1664826984~exp=1664827584~hmac=727c5a1370210628462a9c4fe51c9c3c5a13b05d437d124f4bce227db53036d3") }}>
                      <Bg>
                        <img src="https://img.freepik.com/fotos-gratis/jovem-viajante-curtindo-ambiente-rural_23-2149125547.jpg?w=740&t=st=1664826984~exp=1664827584~hmac=727c5a1370210628462a9c4fe51c9c3c5a13b05d437d124f4bce227db53036d3" alt="" />
                      </Bg>
                    </BgButton>
                  </Backgrounds>
                </CardContent>
                <Side>
                  <Flex>
                    <p>Titulos e legenda</p>
                    <Input type='color' value={backTitleColor} onChange={backTitleColorHandler} />
                  </Flex>
                  <Flex>
                    <p>Texto dentro dos</p>
                    <Input type='color' value={backTextColor} onChange={backTextColorHandler} />
                  </Flex>
                  <Flex>
                    <p>Texto Personalizado</p>
                    <Input type='color' value={backSpanColor} onChange={backSpanColorHandler} />
                  </Flex>
                  <Flex>
                    <p>Fundo do cartão</p>
                    <Input type='color' value={backBgColor} onChange={backBgColorHandler} />
                  </Flex>
                </Side>
              </Make>
            </BoxFlex>
          </BoxContent>
        </Box>
      </Block>
      <br />
      <br />
      <br />
      <br />
    </Form>

  )
}

export default CardMake;