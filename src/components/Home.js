import React from 'react'
import { Button } from 'react-bootstrap'
import reactImage from '../Images/react.png'
import jsImage from '../Images/js.png'
import firebaseImage from '../Images/shutterstock_1389877574.jpg'
import profileImage from '../Images/ダウンロード.jpeg'
const Home = () => {
  return (
    <div className='container text-center'>
      <h1>The world starts here.</h1>

      <img src={profileImage} className='profileImage' />

      <p>
        こんにちは、私はヴィイラです。ゲームとアニメが好きな20代です。プログラミングも勉強していて、今はReactを勉強しています。以前はPythonを勉強していました。
        私は常に新しいことを学ぶことに興味があり、常に自分のスキルを向上させる方法を探しています。私はチームプレーヤーであり、目標を達成するために他の人と協力することを楽しんでいます。また、私は創造的な問題解決者であり、課題に新しいアプローチを見つけることを楽しんでいます。
        私は将来がどうなるか楽しみですし、自分のスキルを使って世界に変化をもたらせると信じています。
      </p>

      <section class='page-section' id='services'>
        <div className='service'>
          <div class='text-center'>
            <h2 class='section-heading text-uppercase'>PORTFOLIO</h2>
            <h3 class='section-subheading text-muted mb-5'>
            </h3>
          </div>
          <div class='row text-center'>
            <div class='col-md-4'>
              <span class='fa-stack fa-4x'>
                <i class='fas fa-circle fa-stack-2x text-primary'></i>
                <i class='fas fa-shopping-cart fa-stack-1x fa-inverse'></i>
              </span>
              <h4 class='my-3'>ゲーム</h4>
              <p class='text-muted'>
                スマホゲーム：グラブル,崩壊スターレイルをしています
                どちらも世界観が好きでやっています！
              </p>
            </div>
            <div class='col-md-4'>
              <span class='fa-stack fa-4x'>
                <i class='fas fa-circle fa-stack-2x text-primary'></i>
                <i class='fas fa-laptop fa-stack-1x fa-inverse'></i>
              </span>
              <h4 class='my-3'>アニメ</h4>
              <p class='text-muted'>
                ガンダムシリーズ、鬼滅の刃、ワンピース、ポケモン、転スラなど好きです
                どれも感動したり熱くさせてくれる作品ばかりです、私は個人的にはガンダムシリーズが子供の頃から好きでした
              </p>
            </div>
            <div class='col-md-4'>
              <span class='fa-stack fa-4x'>
                <i class='fas fa-circle fa-stack-2x text-primary'></i>
                <i class='fas fa-lock fa-stack-1x fa-inverse'></i>
              </span>
              <h4 class='my-3'>プログラミング</h4>
              <p class='text-muted'>
                ポートフォリオ系っぽく作ってみました
                Reactを触って見ましたが、戸惑うことが多かったですがこれからサイトを作ったり
                アプリ作ったりとできたらと考えています
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='skill'>
        <div class='text-center'>
          <h1 class='title'>スキル</h1>
          <div class='row text-center'>
            <div class='col-md-4 services'>
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class='col-md-4 services'>
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class='col-md-4 services'>
              <img src={firebaseImage} />
              <h4>Python</h4>
              <p>Pythonがつかえます</p>
            </div>
          </div>
          <button type='button' class='btn btn-primary'>
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
