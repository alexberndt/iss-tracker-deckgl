interface Props {
  title: string;
}

const Footer = (props: Props) => {
  return (
    <div className="footer container-fluid">
      <p>{props.title}</p>
    </div>
  );
};

export default Footer;
