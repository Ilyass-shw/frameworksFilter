const createDiagram = async (modeler) => {
  try {
    const result = await modeler.createDiagram();
    const { warnings } = result;
    console.log(warnings);
  } catch (err) {
    console.log(err.message, err.warnings);
  }
};
export default createDiagram;
