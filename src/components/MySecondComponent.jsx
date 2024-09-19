export const MySecondComponent = () => {

    const books = [
        "Harry potter y la piedra filosofal",
        "Harry potter y la camara secreta",
        "Harry potter y el prisionero de azkaban",
        "Harry potter y el caliz de fuego",
        "Harry potter y la orden del fenix",
        "Harry potter y el misterio del principe",
        "Harry potter y las reliquias de la muerte",
        "Animales fantásticos y donde encontrarlos"
    ];

    const listBooks = [];
    books.forEach((book, index) => {
        listBooks.push(<li key= { index }> { book }</li>);
    });

  return (
    <>
        <div>MySecondComponent</div>
        <div>
            <ul>
                {
                books.map((book, index) => {
                    return <li key={index}> {book} </li>
                })
                }
            </ul>
            <br/>
            <ul>
                {listBooks}
            </ul>
        </div>
    </>
  )
}
