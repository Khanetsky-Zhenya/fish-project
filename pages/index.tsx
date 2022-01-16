import classes from './MainPage/styles.module.scss'
import PageWrapper from "../components/layouts/PageWrapper"
import BtnGreen from 'components/BtnGreen'

export default function Home() {
  return (
    <PageWrapper>
      <div className={classes.wrap}>
      <div className={classes.body}>
        <div className={classes.body_left}>
          <div className={classes.pre_text}>
              <div className={classes.tire}></div>
              <p className={classes.pre_title}>станьте участником уже сегодня!</p>
          </div>
            <h2 className={classes.title}>давай отправимся на рыбалку!</h2>
            <p className={classes.subtitle}>Мы рады поддерживать и продвигать рыбалку как вид спорта и здоровый образ жизни во всем мире. Мы помогаем новичкам и опытным членам нашего клуба.</p>
            <div className={classes.buttonGroup}>
              <div className={classes.buttonGroup_left}><BtnGreen name="найти водоем"/></div>
              <div className={classes.buttonGroup_right}><BtnGreen name="стать членом клуба"/></div>
            </div>
        </div>
        <div className={classes.body_rigth}></div>
      </div>
    </div>
    </PageWrapper>
  )
}
