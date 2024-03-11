import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
  const [show, setShow] = useState<boolean>(false)

  const [dis, setDis] = useState(false)

  let hours = date.getHours()
  let minutes = date.getMinutes()
  let secs = date.getSeconds()
  let curDate = date.getDate()
  let curDay = date.getDay()
  let curMonth = date.getMonth()

  let formatterTime = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  let formatterDate = new Intl.DateTimeFormat('ru')

  let formatterDay = new Intl.DateTimeFormat("en-EN", {
    weekday: "long",
  })

  let formatterMonth = new Intl.DateTimeFormat("en-EN", {
    month: "long",
  })

  const start = () => {
    //! пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    let tt = setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log(typeof tt)
    setTimerId(+tt)
    setDis(!dis)
  }

  const stop = () => {
    //! пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    clearTimeout(timerId)
    setTimerId(undefined)
    setDis(!dis)
  }

  const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
    setShow(true)
  }
  const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
    setShow(false)
  }

  const stringTime = `${formatterTime.format(date)}` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = `${formatterDate.format(date)}` || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay =  `${formatterDay.format(date)}` || <br/> // пишут студенты
  const stringMonth = `${formatterMonth.format(date)}` || <br/> // пишут студенты

  return (
    <div className={s.clock}>
      <div
        id={'hw9-watch'}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={'hw9-day'}>{stringDay}</span>,{' '}
        <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
      </div>

      <div id={'hw9-more'}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={'hw9-month'}>{stringMonth}</span>,{' '}
              <span id={'hw9-date'}>{stringDate}</span>
            </>
          ) : (
            <>
              <br/>
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={'hw9-button-start'}
          disabled={dis} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={'hw9-button-stop'}
          disabled={!dis} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
