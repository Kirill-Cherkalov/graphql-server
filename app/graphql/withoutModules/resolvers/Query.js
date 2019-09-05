function feed(parent, args, context) {
  return context.prisma.links();
}

function hello() {
  return 'hello';
}

module.exports = {
  feed,
  hello,
};
