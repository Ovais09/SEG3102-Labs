import { NamesPipe } from './names.pipe';

describe('AuthorsPipe', () => {
  it('create an instance', () => {
    const pipe = new NamesPipe();
    expect(pipe).toBeTruthy();
  });
});
