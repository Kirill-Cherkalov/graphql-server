
const { getUserId } = require('../../../helpers/utils');

function post(parent, args, context) {
  const userId = getUserId(context);

  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  });
}

module.exports = {
  post,
};
