import classes from './MainPage/styles.module.scss'
import PageWrapper from "../components/layouts/PageWrapper"
import Header from 'components/Header'
import StandartBtn from 'components/StandartBtn'
import TextTemplate from './MainPage/components/TextTemplate'

const Home = () => {
  return (
    <PageWrapper>
      <div className={classes.wrapper}>
        <div className={classes.backgrounMainImage}>
          <Header />
          <div className={classes.container}>
            <div className={classes.leftPart}>
              <TextTemplate
                pretitle="станьте участником уже сегодня!"
                title="давай отправимся на рыбалку!"
                subtitle="Мы рады поддерживать и продвигать рыбалку как вид спорта и здоровый образ жизни во всем мире. Мы помогаем новичкам и опытным членам нашего клуба."
                />
                <div className={classes.buttonGroup}>
                  <div className={classes.buttonGroupLeft}><StandartBtn name="найти водоем"/></div>
                  <div className={classes.buttonGroupRight}><StandartBtn name="стать членом клуба"/></div>
                </div>
            </div>
            <div className={classes.rigthPart}></div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Home
