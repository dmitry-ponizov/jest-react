import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types';

it('has a correct action', () => {
    const payload = 'New comment'
    const action = saveComment(payload)
    expect(action).toEqual({ type: SAVE_COMMENT, payload})
})
