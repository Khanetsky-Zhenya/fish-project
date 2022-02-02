import React from 'react'

import classes from './styles.module.scss'
import {getImgUrl} from 'services'

const ReservoirCard = () => {
  return (
        <div className={classes.reservoirCard}>
            <img className={classes.reservoirImage} src={getImgUrl('reservoir/zapadnaya_dvina.jpg')} alt="фото водоёма" />
            <div className={classes.reservoirInfo}>
                <h3 className={classes.name}>Западная двина</h3>
                <div className={classes.position}>
                    <h4 className={classes.positionNumber}>#1</h4>
                    <h4 className={classes.positionRegion}>в рейтинге водоёмов Витебской области</h4>
                </div>
                <div className={classes.allParams}>
                    <div className={classes.paramsLeft}>
                        <div className={classes.paramsBlock}>
                            <p className={classes.paramsName}>рейтинг</p>
                            <p className={classes.paramsData}>100</p>
                        </div>
                        <div className={classes.paramsBlock}>
                            <p className={classes.paramsName}>тип водоёма</p>
                            <p className={classes.paramsData}>река</p>
                        </div>
                    </div>
                    <div className={classes.paramsCenter}>
                        <div className={classes.paramsBlock}>
                            <p className={classes.paramsName}>район</p>
                            <p className={classes.paramsData}>Витебский</p>
                        </div>
                        <div className={classes.paramsBlock}>
                            <p className={classes.paramsName}>формат рыбалки</p>
                            <p className={classes.paramsData}>бесплатно</p>
                        </div>
                    </div>
                    <div className={classes.paramsRight}>
                        <div className={classes.paramsBlock}>
                            <p className={classes.paramsName}>количество посещений</p>
                            <p className={classes.paramsData}>1536</p>
                        </div>
                        <div className={classes.paramsBlock}>
                            <p className={classes.paramsName}>опубликовано отчетов</p>
                            <p className={classes.paramsData}>26</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservoirCard