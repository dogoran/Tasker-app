import {
  RECEIVE_TASKS,
  UPDATE_FORM_VALUES,
  CLEAR_FORM_VALUES,
  SET_PAGE,
  SET_SORT_TYPE,
  SET_SORT_DIRECTION,
  UPDATE_EDIT_FORM_VALUES,
  CLEAR_EDIT_FORM_VALUES,
  OPEN_EDIT_FORM,
  CLOSE_EDIT_FORM,
} from './types';

export const initialState = {
  tasks: [],
  formValues: {
    username: '',
    email: '',
    text: '',
    errors: {},
  },
  editTaskFormValues: {
    state: 0,
    text: '',
    errors: {},
  },
  tasksTotalCount: 0,
  currentPage: 1,
  sortType: 'id',
  sortDirection: 'asc',
  taskInEdit: 0,
  isEditFormOpen: false,
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        ...state,
        tasks: action.payload.tasks,
        tasksTotalCount: action.payload.total_task_count,
      };

    case UPDATE_FORM_VALUES:
      return {
        ...state,
        formValues: {
          ...state.formValues,
          ...action.payload,
        },
      };

    case UPDATE_EDIT_FORM_VALUES:
      return {
        ...state,
        editTaskFormValues: {
          ...state.editTaskFormValues,
          ...action.payload,
        },
      };

    case CLEAR_FORM_VALUES:
      return {
        ...state,
        formValues: { ...initialState.formValues },
      };

    case CLEAR_EDIT_FORM_VALUES:
      return {
        ...state,
        editTaskFormValues: { ...initialState.editTaskFormValues },
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    case SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: action.payload,
      };

    case OPEN_EDIT_FORM:
      return {
        ...state,
        isEditFormOpen: true,
        taskInEdit: action.payload,
        editTaskFormValues: {
          ...state.editTaskFormValues,
          ...state.tasks.find((task) => task.id === action.payload),
        },
      };

    case CLOSE_EDIT_FORM:
      return {
        ...state,
        isEditFormOpen: false,
        taskInEdit: 0,
      };

    default:
      return state;
  }
}
