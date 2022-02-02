import PageWrapper from 'components/layouts/PageWrapper'
import { ReservoirCard } from 'features/Reservoirs/components'

import classes from './styles.module.scss'

export const ReservoirsPage = () => {
  return (
    <PageWrapper>
      <div className={classes.container}>
        <h2 className={classes.title}>водоемы беларуси</h2>
        <div className={classes.allRegionButton}>
          <p className={classes.titleRegionButton}>Области:</p>
          <button className={classes.regionButton}>Брестская</button>
          <button className={classes.regionButton}>Витебская</button>
          <button className={classes.regionButton}>Гомельская</button>
          <button className={classes.regionButton}>Гродненская</button>
          <button className={classes.regionButton}>Минская</button>
          <button className={classes.regionButton}>Могилевская</button>
        </div>
        <ReservoirCard/>
      </div>
    </PageWrapper>
  )
}

export default ReservoirsPage