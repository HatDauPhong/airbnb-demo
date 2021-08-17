import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from "next/dist/client/router";
import {format} from "date-fns"
import InforCard from '../components/InforCard';

function Search( {searchResults} ) {
    console.log(searchResults)


    const router = useRouter();

    const formatStartDate = format(new Date(router.query.startDate), "dd MMMM yy");
    const formatEndtDate = format(new Date(router.query.endDate), "dd MMMM yy");

    const range = `${formatStartDate} - ${formatEndtDate}`;

    
    return (
        <div>
            <Header />
            
            <main className="flex-grow pt-14 px-5">
                <section>
                    <p className="text-xs">300+ Stay - {range}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {router.query.location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms anh Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    {searchResults?.map( (item) => (
                        <InforCard 
                            img={item.img}
                            location={item.location}
                            title={item.title}
                            description={item.description}
                            star= {item.star}
                            price={item.price}
                            total={item.total}
                        />
                    ))}
                    
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then (
      (res) =>  res.json()
    );
    return {
      props: {
        searchResults,
      },
    };
  }