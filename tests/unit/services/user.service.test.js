const { UserService } = require('../../../src/services');
const { UserRepositoryMock } = require('../../mocks');
const {
  UserModelMock: {user, users }
} = require('../../mocks');

describe("User Service Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a user by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepositoryMock.get.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.get(user._id);
    expect(expected).toMatchObject(user);
  });

  it("Should find a user by username", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepositoryMock.getUserByUsername.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getUserByUsername(user.username);
    expect(expected).toMatchObject(user);
  });

  it("Should return a user collection", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepositoryMock.getAll.mockReturnValue(users);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getAll();
    expect(expected).toMatchObject(users);
  });

  it("Should update a user by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepositoryMock.update.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.update(user._id , user);
    expect(expected).toMatchObject(user);
  });

  it("Should delete a user by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepositoryMock.delete.mockReturnValue(true);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.delete(user._id , user);
    expect(expected).toEqual(true);
  });

});