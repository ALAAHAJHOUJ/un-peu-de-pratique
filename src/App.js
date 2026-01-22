import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import logo from './logo.svg';
import Draggable from 'react-draggable';
import Tester from './Tester';
import Tester1 from './Tester1';
import Tester2 from './Tester2';
import Tester4 from './Tester4';
import Tester5 from './Tester5';
import Cube from './Cube';


export const context1=createContext(null)

function App() {



  return (
    <>
       <Cube></Cube>
    </>

  );
}

export default App;
