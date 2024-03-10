interface ContainerProps {
    children: React.ReactNode[] | React.ReactNode;
    className?: string;
    id?: string;
  }
  
  const Container: React.FC<ContainerProps> = ({ className, children, id }) => {
    return (
      <div
        id={id}
        className={"max-w-[1280px] px-6 md:px-[40px] mx-auto w-full " + className}
      >
        {children}
      </div>
    );
  };
  
  export default Container;