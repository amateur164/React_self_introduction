import React from 'react';
// 作成したコンポーネントをインポート
import MessageChanger from './MessageChanger'; 
import './App.css'

function App() {
  return (
    <div>
      <h1>私の自己紹介ページ</h1>
      <p>こんにちは！Reactで初めてのWebページを作成中です。</p>
      <ul>
        <li>名前：〇〇</li>
        <li>趣味：プログラミング</li>
        <li>目標：このページを完成させること！</li>
      </ul>

      <h1>React ステートのテスト</h1>
      
      {/* MessageChanger コンポーネントを配置 */}
      <MessageChanger />
    </div>
  );
}

export default App;