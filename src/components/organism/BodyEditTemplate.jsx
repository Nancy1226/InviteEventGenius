import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

function BodyEditTemplate() {
  const { editor, onReady } = useFabricJSEditor();
  const history = [];
  const [color, setColor] = useState("#35363a");
  const [cropImage, setCropImage] = useState(true);
  
    return ( 
    <>
        <h1>soy para editar la platilla</h1>
    </> 
    );
}

export default BodyEditTemplate;