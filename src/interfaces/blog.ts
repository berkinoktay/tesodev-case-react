export interface CarouselProps {
  children: React.ReactNode[] | React.ReactNode;
  classNames?: string;
  show: number;
}
export interface CarouselItemProps {
  title: string;
  author: string;
  createdTime: string;
  img: string;
}
