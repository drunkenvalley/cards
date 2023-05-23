import { useState } from 'react'
import Card from './Card'
import Cover from './Cover'
import Page from './Page'

function App() {
  const covers = [...Array(12).keys()]
  const coverPages = [covers.slice(0, covers.length/2), covers.slice(covers.length/2)]

  const cards = [
    [
      'Han mintes korleis han skjelvte så voldsomt frå hår til tå, men han trengte ein røyk. Så han dro fram løs tobakk og Rizla papir, og prøvde trilla seg røyk. Han sendte tobakken flygande alle andre veger enn det stakkars papiret.'
    ],
    [
      'Når han ikkje sjølv kunne trilla røyk vendte han seg til nødhjelp-snora for hjelp, men han såg jo dobbelt, og skalv enda. Så det var bredt ut med nevene, og fanga med eit klapp, og dra.'
    ],
    [
      'Eg hugsa han lo godt over dei minnene. Eg lo med han.',
      'Men Sjur er ikkje her lengre.'
    ],
    [
      'Me har resten av livet til å minnes Sjur. Me vil møta nye venner og kjente, som kan fylla hjerte med varmen og samnet, men han vil alltid ha ein spesiell plass i hjerta.',
      'Eg vil alltid hugsa varmen han fylte oss med, og kulden lagt igjen av at me har mista han.'
    ]
  ]

  return (
    <>
      <Page className='print-none'>
        <Cover title="Takk for alt">
          1 av 1
        </Cover>
      </Page>
      
      <Page>
        <Card number={1}>
          <p>
            Først ønske eg sei takk til alle her i dag.
          </p>
          <p>
            Me er her i dag for å minnes ein nær venn av meg og mange. Ein bror til to. Son til far og mor.
          </p>
          <p>
            Me er her for Sjur Hansen Gaustad, fødd 6. Februar 1991. Knapt ein måned yngre enn meg sjølv.
          </p>
        </Card>
        <Card number={2}>
          <p>
            For meg var han ein nær venn, ein eg ikkje fekk besøkt så ofta som eg håpte. Eg håpe han og ønska meir besøk.
          </p>
          <p>
            Det var mange gode minner, og når eg mimre om dei kjenner eg korleis me mangle kva som gjorde dei augeblikkene spesielle.
          </p>
        </Card>
        <Card number={3}>
          <p>
            Eg og Sjur møttes via Epilepsiforeninga, i det me begge skulle på danskebåten. Eg hugsa Sjur lo godt når han mintes korleis eg hilsa med å fortelja han at kabal suge.
          </p>
        </Card>
        <Card number={4}>
          <p>
            Han hadde ikkje sjølv epilepsi, men han var mykje på sjukehus. Han fortalte om oppholdene der. Det var noko me kunne le av då.
          </p>
          <p>
            Bivirkninger av behandlinga gjorde han til humor i augeblikket, dramatisert med never og latter.
          </p>
        </Card>
        <Card number={5}>
          <p>
            Han mintes korleis han skjelvte så voldsomt frå hår til tå, men han trengte ein røyk. Så han dro fram løs tobakk og Rizla papir, og prøvde trilla seg røyk.
          </p>
          <p>
            Han sendte tobakken flygande alle andre veger enn det stakkars papiret.
          </p>
        </Card>
        <Card number={6}>
          <p>
            Når han ikkje sjølv kunne trilla røyk vendte han seg til nødhjelp-snora for hjelp, men han såg jo dobbelt, og skalv enda.
          </p>
          <p>
            Så det var bredt ut med nevene, og fanga med eit klapp, og dra.
          </p>
        </Card>
      </Page>

      <Page>
        <Card number={7}>
          <p>
            Eg hugsa han lo godt over dei minnene. Eg lo med han.
          </p>
          <p>
            Men Sjur er ikkje her lengre.
          </p>
        </Card>
        <Card number={8}>
          <p>
            Me har resten av livet til å minnes Sjur.
          </p>
          <p>
            Me vil møta nye venner og kjente, som kan fylla hjerte med varmen og samnet, men han vil alltid ha ein spesiell plass i hjerta.
          </p>
        </Card>
        <Card number={9}>
          <p>
            Eg vil alltid hugsa varmen han fylte oss med, og kulden lagt igjen av at me har mista han.
          </p>
        </Card>
        <Card number={10}>
          <p>
            Til alle her i dag ynskje eg berre sei takk igjen for at dykk er her, og er her med meg og alle når me seie farvel til nokon nær oss.
          </p>
        </Card>
        <Card number={11}>
          <p>
            Og til Sjur ynskje eg at eg kunne sei så mykje. Takk for minnene. Takk for kompaniet. Takk for hjelpen du ga meg i mørke tider. Takk for alt.
          </p>
        </Card>
        <Card number={12}>
          <p>
            Og farvel.
          </p>
        </Card>
      </Page>

      {
        coverPages.map(page => (
          <Page key={page}>
            {page.map(item => (
              <Card key={item}>
                <h1>
                  &#10013;
                </h1>
              </Card>
            ))}
          </Page>
        ))
      }
    </>
  )
}

export default App
