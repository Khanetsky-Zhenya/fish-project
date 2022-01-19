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
            <div className={classes.firstScreenLeftPart}>
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
            <div className={classes.firstScreenRigthPart}></div>
          </div>
        </div>
        <div className={classes.backgrounSecondImage}>
          <div className={classes.container}>
            <div className={classes.secondScreenLeftPart}></div>
            <div className={classes.secondScreenRigthPart}>
              <TextTemplate
                pretitle="займи своё место в списке лидеров!"
                title="поделись своим результатом!"
                subtitle="В этом разделе приводится список всех зарегестрированных рыболовов-пользователей и составлен их рейтинг в зависимости от улова. Ты сможешь ознакомиться с их достижениями и, оставляя результаты своих рыбалок в профиле, узнать, какое место среди них занимаешь  ты сам."
              />
              <div className={classes.button}><StandartBtn name="перейти"/></div>
            </div>
          </div>
        </div>
        <div className={classes.backgrounThirdImage}>
          <div className={classes.container}>
            <div className={classes.thirdScreenLeftPart}>
              <TextTemplate
                pretitle="узнай, какие водоемы самые популярные!"
                title="выбери лучшее место ловли!"
                subtitle="В этом разделе на основе специальных алгоритмов мы составили рейтинг водоемов и рек нашей страны, который опирается на результаты рыбалок пользователей. Рейтинг покажет реальную ситуацию по рыбной ловле на интересующем тебя водоеме, а также подскажет место, куда ты сможешь отправитсья в следующий раз."
              />
              <div className={classes.button}><StandartBtn name="перейти"/></div>
            </div>
            <div className={classes.thirdScreenRigthPart}></div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Home
