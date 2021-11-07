import React, { useEffect, useRef } from 'react';

import BpmnJS from 'bpmn-js/dist/bpmn-modeler.development.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

import createDiagram from '../helpers/createDiagram';

const ModelerPage = () => {
  const container = useRef(null);

  useEffect(() => {
    const modeler = new BpmnJS({
      container: container.current,
    });

    createDiagram(modeler);

    return () => modeler.detach();
  }, []);

  return (
    <>
      <h1> Modeler </h1>
      <article ref={container} />
    </>
  );
};

export default ModelerPage;
