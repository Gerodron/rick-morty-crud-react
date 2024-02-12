export const CardsCharacter = ({name, status, species, image}) => {
    return (
      <>
        {/* Contenedor principal de las cards */}
        <div >
          {/* Contenedor de cada card */}
          <div className="bg-white rounded-lg w-[550px] min-h-[300px] p-5 m-4">
            <div className="flex h-full">
              <img className="bg-red-700 h-full w-52" src={image}/>
              <div className="flex flex-col px-7 max-w-full">
                <p> <strong>Name: </strong> { name }</p>
                <p> <strong>Status :</strong> { status } </p>
                <p><strong>Species :</strong> { species } </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  