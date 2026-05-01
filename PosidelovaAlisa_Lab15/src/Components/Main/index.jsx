import { Routes, Route } from 'react-router-dom';
import './style.css'

function News(){
    return <p><h1>Новости</h1></p>
}
function About(){
    return <h2>Южный федеральный университет (ЮФУ)</h2>
}
function Contacts(){
    return <h2>8-800-555-35-35</h2>
}

export function Main(){
    return (
    <div class="main">
        <div class="mainContainer">
            <section class="flexCenter">
                <img src="https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=480&w=480" width={200} />
            </section>
            <article class="flexCenter">
                <Routes>
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About us />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<h3>Некорректная ссылка</h3>} />
                </Routes>
            </article>
            <aside class="flexCenter">Посиделова Алиса</aside>
        </div>
    </div>)
}
export default Main;