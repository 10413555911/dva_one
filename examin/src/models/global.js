
export default {

    namespace: 'global',
  
    state: {
        locale:navigator.language.indexOf("zh")!==-1 ?"zh":"en"
    },
  
    reducers: {
      updataLocale(state, action) {
        return { ...state, locale:action.payload };
      },
    },
  
  };
  