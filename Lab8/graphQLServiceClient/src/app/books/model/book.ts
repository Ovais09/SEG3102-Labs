export class Book {
  constructor(
    public bookId: number,
    public bookNumber: number,
    public category: string,
    public title: string,
    public cost: number,
    public authors?: Author[],
    public year?: number,
    public description?: string
  ) {}
}

export class Author {
  constructor(
    public bookNumber: number,
    public firstName: string,
    public lastName: string
  ){}
}
