interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className=" mx-auto w-full sm:max-w-8xl max-w-full ">{children}</div>;
};

export default Container;
