export interface SubCategory {
  _id: any;
  name: string;
  photo: string;
  categoryId: {
    _id: any,
    name: string,
    photo: string,
  }
}
