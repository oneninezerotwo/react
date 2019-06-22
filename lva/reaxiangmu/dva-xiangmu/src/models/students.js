


export  default {
    namespace:'students',

    state :{
        name : 'abc'
    },
    reducers: {
        getStudents(state, action) {
          return { ...state, ...action.payload };
        },
    }
}