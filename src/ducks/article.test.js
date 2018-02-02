// thunk를 만들기 전에 항상 test를 해보자

import reducer, {
  articleCreating,
  articleSuccess,
  articleError,
} from './article';

describe('article', () => {
  it('reducer test', () => {
    const state = reducer(undefined, articleCreating());
    expect(state).toEqual({
      creating: true,
      success: false,
      errorMessage: '',
    })

  })
})
