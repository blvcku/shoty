import ReactDom from "react-dom";

type UploadPortalTypes = {
  children: React.ReactNode;
};

const UploadPortal: React.FC<UploadPortalTypes> = ({
  children,
}: UploadPortalTypes) =>
  ReactDom.createPortal(
    <>{children}</>,
    document.getElementById("upload") as Element
  );

export default UploadPortal;
