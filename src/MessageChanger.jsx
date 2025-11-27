import React, { useState } from 'react';

function MessageChanger() {
  // 1. ステート（State）の定義
  // useState() を使って、'初期メッセージ' という初期値を持つステートを定義します。
  // 'message' は現在のステートの値、'setMessage' は値を更新するための関数です。
  const [message, setMessage] = useState('ボタンを押してメッセージを変えてみよう！');

  // 2. イベントハンドラ（関数）の定義
  // ボタンがクリックされたときに実行される関数です。
  const handleClick = () => {
    if (message === 'ボタンを押してメッセージを変えてみよう！') {
      // ステートの値を更新する
      setMessage('メッセージが変わりました！😄');
    } else {
      // ステートの値を元に戻す
      setMessage('ボタンを押してメッセージを変えてみよう！');
    }
    
    // **重要**: setMessage() が実行されると、Reactはこのコンポーネントを再レンダリングします。
  };

  // 3. 画面の表示（JSX）
  return (
    <div>
      {/* ステートの値を表示する */}
      <h2>現在のメッセージ: {message}</h2>
      
      {/* ボタンがクリックされたら handleClick 関数を実行する */}
      <button onClick={handleClick}>
        メッセージを切り替える
      </button>
    </div>
  );
}

export default MessageChanger;