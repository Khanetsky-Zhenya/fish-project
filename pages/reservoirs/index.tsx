import PageWrapper from 'components/layouts/PageWrapper'
import { ReservoirCard } from 'features/Reservoirs/components'

import classes from './styles.module.scss'

export const ReservoirsPage = () => {
  return (
    <PageWrapper>
      <div className={classes.container}>
        <h2 className={classes.title}>водоемы беларуси</h2>
        <div className={classes.regionsWrapper}>
          <p className={classes.regionsHeader}>Области:</p>
          <button className={classes.region}>Брестская</button>
          <button className={classes.region}>Витебская</button>
          <button className={classes.region}>Гомельская</button>
          <button className={classes.region}>Гродненская</button>
          <button className={classes.region}>Минская</button>
          <button className={classes.region}>Могилевская</button>
        </div>
        <ReservoirCard/>
        <ReservoirCard/>
        <ReservoirCard/>
        <ReservoirCard/>
      </div>
    </PageWrapper>
  )
}

export default ReservoirsPage