const Board = ({faq}) => {
  return ( 
  <div className="react-post grid">
   
      {faq.map(item => (
        <article className="grid-item"
        key={faq.id}>
        <h2>{item.question}</h2>
        </article>
      ))}
  

  </div> );
}
 
export default Board;