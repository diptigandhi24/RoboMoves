import React, { useState } from "react";
'

interface Board {
  size: number;
}

function RoboBoard(props: Board) {
  const [board, updateBoard] = useState([[]]);
}

function useBoard(size) {
  let multiArr: any = [];
  multiArr.length = size;
  let demo: Array<Array<string>> = multiArr.map(() => {
    let newArr = [];
    return (newArr.length = size);
  });
  return demo;
  
}
