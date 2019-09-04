const QuerySchema = require('./modules/Query/schema');
const MutationSchema = require('./modules/Mutation/schema');
const LinkSchema = require('./modules/Link/schema');
const UserSchema = require('./modules/User/schema');

module.exports = [QuerySchema, MutationSchema, LinkSchema, UserSchema];
