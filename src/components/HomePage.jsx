import { GetRickMortyApi } from "../helpers/GetRickMortyApi"
import { useFetchApi } from "../hooks/useFetchApi";
import { CardsCharacter } from "./CardsCharacter";

export const HomePage = () => {
    const { response } = useFetchApi();
    // const {data } = response
    console.log(response.data);
    
    

  return (
    <>
        <div className="p-14 bg-white">
            <p className='text-[75px] font-bold text-center fon text-[#00061fdd]'>The Rick and Morty</p>
        </div>
        <div className="flex flex-wrap p-10 justify-center" >
            {
                response.data.map(({id, name, status, species, image})=>(
                    <CardsCharacter key={id} name={name}  status={status} species={species} image={image} />
                    // console.log(id, name, status, species, image)
                ) )
            }

            
            {/* {
            response.data ? (
                <div className="flex flex-wrap">
                {response.data.map(({ id, name, status, species, image }) => (
                    <CardsCharacter key={id} name={name} status={status} species={species} image={image} />
                ))}
                </div>
            ) : (
                <div>Loading characters...</div>
            )
            } */}

        </div>

    </>
  )
}
