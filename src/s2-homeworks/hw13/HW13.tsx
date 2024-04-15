import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios, {AxiosError, AxiosResponse} from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {
  const [code, setCode] = useState('Код 200!')
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')

  type ResType = {
    status: string,
    data: {
      errorText: string,
      info: string
    }
  }
  const foo = (res: any, img: string) => {
    setText(res.data.errorText)
    setCode(res.status)
    setInfo(res.data.info)
    setImage(img)
  }

  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCode('')
    setImage('')
    setText('')
    setInfo('...loading')

    axios
      .post(url, {success: x})
      .then((res) => {
        console.log(res)
        // foo(res, success200)
        setCode('Код 200!')
        setText(res.data.errorText)
        setInfo(res.data.info)
        setImage(success200)

      })
      .catch((e) => {
        //! дописать
        console.log(e)

        if (!!e.response.status) {
          setText(e.response.data.errorText)
          setCode(e.response.status)
          setInfo(e.response.data.info)
          e.response.status === 500 ? setImage(error500) : setImage(error400)
        } else {
          setInfo(e.message)
          setImage(errorUnknown)
          setText(e.name)
          setCode(e.code)
        }

        // if (e.response.status === 500) {
        //   console.log(e)
        //   foo(e.response, error500)
        // } else if (e.response.status === 400) {
        //   foo(e.response, error400)
        // } else {
        //   setText(e.name)
        //   setCode(e.code)
        //   setInfo(e.message)
        //   setImage(errorUnknown)
        // }
      })

  }

  return (
    <div id={'hw13'}>
      <div className={s2.hwTitle}>Homework #13</div>

      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={'hw13-send-true'}
            onClick={send(true)}
            xType={'secondary'}
            //! дописать
            disabled={info === '...loading'}

          >
            Send true
          </SuperButton>
          <SuperButton
            id={'hw13-send-false'}
            onClick={send(false)}
            xType={'secondary'}
            //! дописать
            disabled={info === '...loading'}
          >
            Send false
          </SuperButton>
          <SuperButton
            id={'hw13-send-undefined'}
            onClick={send(undefined)}
            xType={'secondary'}
            //! дописать
            disabled={info === '...loading'}
          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={'hw13-send-null'}
            onClick={send(null)} // имитация запроса на не корректный адрес
            xType={'secondary'}
            //! дописать
            disabled={info === '...loading'}
          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status"/>}
          </div>

          <div className={s.textContainer}>
            <div id={'hw13-code'} className={s.code}>
              {code}
            </div>
            <div id={'hw13-text'} className={s.text}>
              {text}
            </div>
            <div id={'hw13-info'} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW13
