'use strict';
const PostController = require('../../src/controllers/post.controller');

const getSpy = jest.fn();

jest.doMock('express', () => {
  return {
    Router() {
      return {
        get: getSpy,
      };
    },
  };
});

describe('should test router', () => {
  test('should test get posts', () => {
    require('../../src/routers');
    expect(getSpy).toHaveBeenCalledWith('/posts', PostController.getPosts);
  });
});
