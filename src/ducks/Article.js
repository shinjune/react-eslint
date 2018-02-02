import * as firebase from 'firebase';
// {
//   creating :false,
//   success: false,
//   errorMessage: '',

// }

export const CREATING = 'article/CREATING';
export const SUCCESS = 'article/SUCCESS'
export const ERROR = 'article/ERROR'

// 위의 것들의 action creator를 만들어보자
export function articleCreating() {
  return {
    type: CREATING,
  };
}

export function articleSuccess() {
  return {
    type: SUCCESS,
  };
}

export function articleError(errorMessage) {
  //errorMessage를 인자로 받아보자
  return {
    type: SUCCESS,
    errorMessage,
  };
}

// 이제 reducer를 만들어보자
const initialState = {
  creating: false,
  success: false,
  errorMessage: '',
}
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMessage: '',
      };
    case SUCCESS:
      return {
        creating: false,
        success: true,
        errorMessage: '',
      }
    case ERROR:
      return {
        creating: false,
        success: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}


// thunk를 짜자. thunk 짜기 전에 article.test.js에서 테스트를 먼저 하자
// 화살표 뒤 async부터 thunk다
export const createArticle = ({title, content}) => async (dispatch) => {
  //firebase
  if(!title || !content) {
    dispatch(articleError('필드를 모두 fill'));
    return;
  }
  const {currentUser} = firebase.auth();
  if (!currentUser) {
    return;
  }
  dispatch(articleCreating());
  try {
    const articleRef = firebase.database().ref('articles').push({
      title,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      //firebase에서 시간 불러오는 코드
      uid: currentUser.uid,
    });
    const contentPromise = firebase.database().ref(`contents/${articleRef.key}`).set(content);
    await Promise.all([articleRef, contentPromise]);
    dispatch(articleSuccess());
  } catch (e) {
    dispatch(articleError(`unknown errors happen. try again: ${e.message}`))
  }
}


//위를 동작시키리면 container component를 만들어줘야 한다. ducks의 index.js로 가자
