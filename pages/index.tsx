import PageWrapper from 'components/layouts/PageWrapper'
import classes from 'features/MainPage/styles.module.scss'
import { TextTemplate } from 'features/MainPage/components'
import { getImgUrl } from 'services'

const Home = () => {
  return (
    <PageWrapper>
      <div className={classes.backgrounMainImage}>
        <div className={classes.container}>
          <div className={classes.firstScreenLeftPart}>
            <TextTemplate
              pretitle="станьте участником уже сегодня!"
              title="давай отправимся на рыбалку!"
              subtitle="Мы рады поддерживать и продвигать рыбалку как вид спорта и здоровый образ жизни во всем мире. Мы помогаем новичкам и опытным членам нашего клуба."
              leftBtnText="найти водоем"
              rightBtnText="стать членом клуба"
              skin="large"
            />
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
              leftBtnText="перейти"
            />
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
              rightBtnText="перейти"
            />
          </div>
          <div className={classes.thirdScreenRigthPart}></div>
        </div>
      </div>
      <div className={classes.aboutProject}>
        <img className={classes.cshukaImgLeft} src={getImgUrl('cshuka.png')} alt="" />
        <div className={classes.wrapper}>
          <h2 className={classes.title}>на связи с вами</h2>
          <p className={classes.subtitle}>Наш сервис находится на начальном этапе его становления. С каждым месяцем мы планируем его расширять и добавлять что-то новое и полезное для вас. Мы всегда открыты к вашей критике и идеям по добавлению нового функционала и изменениям в существующем. Главная наша цель - создать по-настоящему полезный интернет-ресурс для рыбаков Беларуси. По всем замечаниями и предложениям пишите нам по ссылкам ниже.</p>
        </div>
        <img className={classes.cshukaImgRight} src={getImgUrl('cshuka.png')} alt="" />
      </div>
    </PageWrapper>
  )
}

export default Home
