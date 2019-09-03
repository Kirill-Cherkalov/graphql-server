const { Injectable } = require('@graphql-modules/di');

@Injectable()
class UserProvider {
  users = [
    {
      id: '0',
      username: 'jhon',
    }
  ];

  getUserById(id: String){
    return this.users.find(user => user.id === id);
  }
}

module.exports = UserProvider;
