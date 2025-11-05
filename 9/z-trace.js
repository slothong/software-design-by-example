export default {
  open: (expander, node) => {
    expander.showTag(node, false);
    console.error(expander.env.find(node.attribs['z-trace']));
  },
  close: (expander, node) => {
    expander.showTag(node, true);
  }
}
