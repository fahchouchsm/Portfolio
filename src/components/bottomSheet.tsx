import type { FC } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  content: React.ReactNode;
}

export const BottomSheet: FC<BottomSheetProps> = ({ content }) => {
  return <div>{content}</div>;
};
