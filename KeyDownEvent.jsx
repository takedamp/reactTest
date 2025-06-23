import React, {useState, useEffect, useMemo} from 'react';

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
//   const [val, set] = useState();
//   const [phrase, setPhrase] = useState("example phrase");

//   const createPhrase = () => {
//     setPhrase(val);
//     set("");
//   }

//   // ミスケース（コンソールログが常に出力されてしまう）
//   useEffect(() => {
//     console.log(`typing "${val}"`);
//   })

//   useEffect(() => {
//     console.log(`saved phrase: "${phrase}"`);
//   })

//   // // console.logの制御を行える
//   // // inputタグの数値を変更した(onChange)時に処理
//   // useEffect(() => {
//   //   console.log(`typing "${val}"`);
//   // }, [val])

//   // // sendボタンを押下した（onClick）時に処理
//   // useEffect(() => {
//   //   console.log(`saved phrase: "${phrase}"`);
//   // }, [phrase])

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

export default function KeyDownEvent({Children = ""}){
  
  const useAnyKeyToRender = () =>{
    const [, forceRender] = useState();

    useEffect(() =>{
      window.addEventListener("keydown", forceRender);
      return () => window.removeEventListener("keydown", forceRender);
    },[]);

    console.log(`keyが入力されました。`)
  }
  
  useAnyKeyToRender();

  // userStateの設定
  const words = useMemo(() => {
    const words = Children.split(" ");
    return words;
  });

  // ミスケース（キーダウン時にログが出力されない）
  useEffect(() => {
    console.log(`fresh render`);
  },[])

  // useEffect(() => {
  //   console.log(`fresh render`);
  // },[words])

  return(
    <>
      <p>fresh render</p>
    </>    
  )
}