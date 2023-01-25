const Card = ({ dishe }) => {
  return (
    <div className="bg-card p-4 rounded-lg w-6/12">
      <p>{dishe.title}</p>
      <p>{dishe.price}</p>
      <p>{dishe.stock}</p>
    </div>
  );
};
export default Card;
