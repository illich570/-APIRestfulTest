const { CommentRepository } = require('../../../src/repositories');
const mockingoose = require('mockingoose').default;
const { Commment } = require('../../../src/models');
let { CommentModelMock : {comment} } = require('../../mocks');

describe("Comment Repository Test", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Shold return a comment by id", async () => {
    const _comment = {...comment};
    delete _comment.author.password;
    mockingoose(Comment).toReturn(comment, "findOne");

    const _commentRepository = new CommentRepository({ Comment });
    const expected = await _commentRepository.get(_comment._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_comment);

  });

})