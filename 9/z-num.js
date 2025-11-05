
export default {
  open: (expander, node) => {
    expander.showTag(node, false);
    expander.output(expander.env.find(node.attribs['z-num']));
  },
  close: (expander, node) => {
    expander.showTag(node, true);
  }
};
