import React from 'react'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
  return (
    <div>
      {/*<div>*/}
      {/*  <div> <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink></div>*/}
      {/*  <div> <NavLink to={PATH.JUNIOR}>Junior</NavLink></div>*/}
      {/*  <div> <NavLink to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink></div>*/}
      {/*</div>*/}
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        {/*роутинг будут писать студенты*/}
        {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
        <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

        {/*роуты для /pre-junior, /junior, /junior-plus*/}
        {/*<Route ...*/}
        {/*<Route ...*/}
        {/*<Route ...*/}
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
        <Route path={PATH.JUNIOR} element={<Junior/>}/>
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

        {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
        {/*<Route ...*/}

        <Route path={'/*'} element={<Navigate to={'/some-wrong-url'} />}/>
        <Route path={'/some-wrong-url'} element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default Pages
