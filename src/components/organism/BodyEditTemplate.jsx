import React, { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import styled from "styled-components";
import Barup from "./Barup";
import BarRight from "./BarRight";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
  width: 100%;
  height: 84vh;
`;

const StyledContainerCanva = styled.div`
  background: #FCD8FF;
  /* border: 8px solid wheat; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
`
const StyledSubContainerCanva = styled.div`
  border: 2px solid black;
  background: white;
  width: 80%;
  height: 80%;
`;

function BodyEditTemplate() {
  const { editor, onReady } = useFabricJSEditor();

  const history = [];
  const [color, setColor] = useState("#35363a");
  const [cropImage, setCropImage] = useState(true);

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }

    if (cropImage) {
      editor.canvas.__eventListeners = {};
      return;
    }

    if (!editor.canvas.__eventListeners["mouse:wheel"]) {
      editor.canvas.on("mouse:wheel", function (opt) {
        var delta = opt.e.deltaY;
        var zoom = editor.canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        editor.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
    }

    if (!editor.canvas.__eventListeners["mouse:down"]) {
      editor.canvas.on("mouse:down", function (opt) {
        var evt = opt.e;
        if (evt.ctrlKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:move"]) {
      editor.canvas.on("mouse:move", function (opt) {
        if (this.isDragging) {
          var e = opt.e;
          var vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:up"]) {
      editor.canvas.on("mouse:up", function (opt) {
        // on mouse up we want to recalculate new interaction
        // for all objects, so we call setViewportTransform
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }

    editor.canvas.renderAll();
  }, [editor]);

  const addBackground = () => {
    if (!editor || !fabric) {
      return;
    }

    fabric.Image.fromURL(
      "      ",
      (image) => {
        editor.canvas.setBackgroundImage(
          image,
          editor.canvas.renderAll.bind(editor.canvas)
        );
      }
    );
  };

  const fromSvg = () => {
    fabric.loadSVGFromString(
      ``,
      (objects, options) => {
        editor.canvas._objects.splice(0, editor.canvas._objects.length);
        editor.canvas.backgroundImage = objects[0];
        const newObj = objects.filter((_, index) => index !== 0);
        newObj.forEach((object) => {
          editor.canvas.add(object);
        });

        editor.canvas.renderAll();
      }
    );
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.setHeight(innerHeight - 200);
    editor.canvas.setWidth(innerWidth - 100);
    addBackground();
    editor.canvas.renderAll();
  }, [editor?.canvas.backgroundImage]);



  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.color = color;
    editor.setStrokeColor(color);
  }, [color]);

  const toggleDraw = () => {
    editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
  };

  const clear = () => {
    editor.canvas._objects.splice(0, editor.canvas._objects.length);
    history.splice(0, history.length);
    editor.canvas.renderAll();
  };

  const removeSelectedObject = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  const onAddCircle = () => {
    editor.addCircle();
  };

  const addText = () => {
    editor.addText("inserte texto");
  };

  const exportSVG = () => {
    const svg = editor.canvas.toSVG();
    console.info(svg);
  };

  const addImage = (evnt) =>{
    const file = evnt.target.files[0];
    const url = url.createObjectURL();
    const imgNode = new Image();
    imgNode.src = url;
    imgNode.onload = () =>{
      const img = new fabric.Image(imgNode,{
        left: 100,
        top: 100,
        angle: 30,
        opacity: 1,
      });
      canvas.add(img)
    };
  }

  const btnOnclick = () =>{
    const dataURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "yutu";
    a.href = dataURL;
    a.click();
  }

  const handleDownload = () => {
        const imgDataUrl = editor.canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = imgDataUrl;
        downloadLink.download = 'fabric_canvas_image.png';
        downloadLink.target = '_blank';
        downloadLink.click();
        const canvasData = editor.canvas.toJSON(); 
        const canvasDataJson = JSON.stringify(canvasData);
        console.log(canvasDataJson);
    };

  return (
    <>
      <Barup funcionDelete={clear} funcion4={handleDownload} />
    <StyledContainer>
      <StyledContainerCanva>
      <StyledSubContainerCanva>
      <label disabled={!cropImage}>
        <input
          disabled={!cropImage}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>

      <input accept="image/*" type="file" name="image" id="input" />

      <div
        style={{
          border: `3px ${!cropImage ? "dotted" : "solid"} Green`,
          width: "100%",
          height: "95%"
        }}
        >
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </div>

      </StyledSubContainerCanva>
    </StyledContainerCanva>

    <BarRight addText={addText} draw={toggleDraw} circle={onAddCircle} clean={removeSelectedObject} />
    </StyledContainer>
    </>
  );
}

export default BodyEditTemplate;