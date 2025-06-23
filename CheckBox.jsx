import React, {useState, useEffect, useMemo, useAnyKeyToRender, useReducer} from 'react';

// userEffect無し（HTML描画前にアラート処理が起きる）
// export default function Checkbox(){
//   // userStateの設定
//   const [checked, setChecked] = useState(false);

//   alert(`checked: ${checked.toString()}`)
//   return(
//     <>
//       <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
//       {checked ? 'checked' : "not checked"}
//     </>    
//   )
// }


// userEffect無し　アラートを後出力　クリック時にアラートが出力されない（HTML読み込み時にアラート処理が起きる）
// export default function Checkbox(){
//   // userStateの設定
//   const [checked, setChecked] = useState(false);

//   //checkboxの出力
//   return(
//     <>
//       <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
//       {checked ? 'checked' : "not checked"}
//     </>    
//   )

//   // JavaScript アラートの呼び出し
//   alert(`checked: ${checked.toString()}`)
// }



// userEffectあり（HTML読み込み後にアラート処理が起きる)
// export default function Checkbox(){
//   // userStateの設定
//   const [checked, setChecked] = useState(false);

//   useEffect(() =>{
//     alert(`checked: ${checked.toString()}`)
//   })

//   // alert(`checked: ${checked.toString()}`)
//   return(
//     <>
//       <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
//       {checked ? 'checked' : "not checked"}
//     </>    
//   )
// }

// 7.1.1
// export default function Checkbox(){
//   // userStateの設定
  // const [val, set] = useState();
  // const valueData = ["aaa", "bbb"];
  // let value = [];
  // const [phrase, setPhrase] = useState("example phrase");

  // const setValue = () => {
  //   value = ["aaa","bbb"];
  // }

//   const createPhrase = () => {
//     setPhrase(val);
//     set("");
//   }

//   // ミスケース（コンソールログが常に出力されてしまう）
//   // useEffect(() => {
//   //   console.log(`typing "${val}"`);
//   // })

//   // useEffect(() => {
//   //   console.log(`saved phrase: "${phrase}"`);
//   // })

//   // // console.logの制御を行える
//   // // inputタグの数値を変更した(onChange)時に処理
//   useEffect(() => {
//     console.log(`typing "${val}"`);
//   }, [value])

//   // // sendボタンを押下した（onClick）時に処理
//   useEffect(() => {
//     console.log(`saved phrase: "${phrase}"`);
//   }, [phrase])

//   // alert(`checked: ${checked.toString()}`)

//   return(
//     <>
//       <label>Favorite phrase:</label>
//       <input value={val} placeholder={phrase} onChange={e => set(e.target.value)} />
//       <button onClick={createPhrase}>send</button>
//     </>    
//   )
// }

//7.1.2 依存配列を扱う際の注意
/*
const a = [1,2];
const b = [1,2];
a===b (false)

const c = "test";
const d = "test";
c === d (true)

useEffectで指定している配列と別名で定義された配列は別で認識されているため
*/

// wordsを外に出すとuseEffectが動作しなくなる
// const words = "aaa";

// スコープの考え方。
// 配列とオブジェクトの比較の概念が抜けている
// 使用する関数の使用意図について理解をしてから、動作する。
// 文章の内容

// 7.2

// useMemo 計算コストの削減　データが与えて変わったら変更を与える

// export default function Checkbox({Children = "test value"}){

//   const useAnyKeyToRender = () =>{
//     const [, forceRender] = useState();

//     useEffect(() =>{
//       window.addEventListener("keydown", forceRender);
//       return () => window.removeEventListener("keydown", forceRender);
//     },[]);

//     console.log(`keyが入力されました。`)
//   }

//   useAnyKeyToRender();
//   // const words = ["aaa","bbb","ccc"];
//   // useEffect(() => {
//   //   console.log(`fresh render`);
//   // },[words])

//   const words = useMemo(() => Children.split(" "), [Children]);

//   // const words = useMemo(() => {
//   //   const words = Children.split(" ");
//   //   console.log(words);
//   //   return words;
//   // });

//   // const words = Children.split(" ")
//   useEffect(() => {
//     console.log(`fresh render`);
//   },[words])


//   // ミスケース（キーダウン時にログが出力されない）
//   // useEffect(() => {
//   //   console.log(`fresh render`);
//   // },[])

//   // useEffect(() => {
//   //   console.log(`fresh render`);
//   // },[words])

//   return(
//     <>
//       <p>fresh render</p>
//     </>    
//   )
// }

// export default function Checkbox(){
//   // useStateの設定
//   const [checked, setChecked] = useState(false);

//   useEffect(() =>{
//     alert(`checked: ${checked.toString()}`)
//   })

//   return(
//     <>
//       <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
//       {checked ? 'checked' : "not checked"}
//     </>    
//   )
// }

  // reducerあり
  export default function Checkbox(){
    // useStateの設定
    const [checked, setChecked] = useReducer(checked => !checked, false);
    

      useEffect(() =>{
        alert(`checked: ${checked.toString()}`)
      })

    return(
      <>
        <input type="checkbox" value={checked} onChange={setChecked}/>
        {checked ? 'checked' : "not checked"}
      </>    
    )
  }