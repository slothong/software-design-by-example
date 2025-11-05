const print = (node) => {
  const result = [];

  const printIter = (nodeItem) => {
    if (nodeItem.type === 'text') {
      result.push(nodeItem.data);
      return;
    }
    result.push(`<${nodeItem.name}>`);
    nodeItem.children.forEach(child => {
      printIter(child, result);
    })
    result.push(`</${nodeItem.name}>`);
  };

  printIter(node);

  return result.join('');
};

export default {
  open: (expander, node) => {
    expander.env.push({
      [node.attribs['z-snippet']]: print(node)
    });
  },
  close: (expander, node) => {}
};
