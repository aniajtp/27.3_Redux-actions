import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
const boundAddComment = text => dispatch(addComment(text));

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}
const boundEditComment = id => dispatch(editComment(id, text));

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}
const boundRemoveComment = id => dispatch(removeComment(id));


function thumbUpComment(id, thumb) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumb: ++thumb
    }
}
const boundThumbUpComment = (id, thumb) => dispatch(thumbUpComment(id, thumb));

function thumbDownComment(id, thumb) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumb: --thumb
    }
}
const boundThumbDownComment = (id, thumb) => dispatch(thumbDownComment(id, thumb));
