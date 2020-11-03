import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="navbar-brand" to="/">Главная</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Reg">Регистрация</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Log">Авторизация</Link>
            </li>
          </ul>
        </nav>

          <Switch>
            <Route path="/Reg">
              <Reg />
            </Route>
            <Route path="/Log">
              <Log />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <div>
      <div class="marg">
      <h2 class="anti-marg">Главная страница</h2>
        <p>Прежде всего, высококачественный прототип будущего проекта обеспечивает актуальность укрепления моральных ценностей. Не следует, однако, забывать, что новая модель организационной деятельности прекрасно подходит для реализации направлений прогрессивного развития. Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение экономической целесообразности принимаемых решений.</p>
    </div>
    </div>;
}

function Reg() {
  return <div class="marg">
    <h2 class="anti-marg">Регистрация</h2>
    <label>Введите Логин</label>
    <input class="form-control" type="text" name="login"/>
    <label>Введите пароль</label>
    <input class="form-control" type="password" name="password"/>
    <label>Введите Имя</label>
    <input class="form-control" type="text" name="name"/>
    <label>Введите Фамилию</label>
    <input class="form-control" type="text" name="sername"/>
    <label>Введите EMail</label>
    <input class="form-control" type="email" name="email"/>
    <button class="mt-2 btn btn-info">Зарегестрироватся</button>
  </div>;
}

function Log() {
  let match = useRouteMatch();
  return (
      <div class="marg">
        <h2 class="anti-marg">Авторизация</h2>

          <label>Введите Логин</label>
          <input class="form-control" type="text" name="login"/>
          <label>Введите пароль</label>
          <input class="form-control" type="password" name="password"/>
          <button class="mt-2 btn btn-info">Авторизоватся</button>
      </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
