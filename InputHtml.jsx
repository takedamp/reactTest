import React, {useState, useEffect, useMemo, useAnyKeyToRender, useLayoutEffect} from 'react';

// userEffectあり（HTML読み込み後にアラート処理が起きる)
export default function InputHtml(){
  // userStateの設定
  const [checked, setChecked] = useState(false);
  const [num] = useState(1);

  useEffect(() =>{
    console.log("useEffect")
  },[num])

  useLayoutEffect(() =>{
    console.log("useLayoutEffect")
  },[num])

  // エラー　useLayoutEffectやuseEffect等をループで定義することはエラーにつながる
  // for(let i = 0; i < 3; i++){
  //   useLayoutEffect(() =>{
  //     console.log("useLayoutEffect")
  //   },[num])
  // }

  // alert(`checked: ${checked.toString()}`)
  return(
    <>
      <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
      {checked ? 'checked' : "not checked"}
    </>    
  )
}