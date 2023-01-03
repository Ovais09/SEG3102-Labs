export class Book {
  constructor(
    public id: number,
    public category: string,
    public title: string,
    public cost: number,
    public author?: string,
    public year?: number,
    public description?: string
  ) {}
}
