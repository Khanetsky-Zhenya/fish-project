import classes from './MainPage/styles.module.scss'
import PageWrapper from "../components/layouts/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <span className={classes.text}>Здесь верстаем главную страницу</span>
    </PageWrapper>
  )
}
