export interface IModal {
  bookId: string | undefined;
  isModalOpen: boolean;
  handleModal: (value: boolean) => void;
}
