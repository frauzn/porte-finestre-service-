import { Link, useParams } from "react-router-dom";
import DoorCard from "../components/DoorCard";
import collections from "../data/collections";
import doors from "../data/doors";

export default function CollectionPage() {
  const { collection } = useParams<{ collection: string }>();

  const selectedCollection = collections.find(
    (item) => item.id === collection
  );

  const collectionDoors = doors.filter(
    (door) => door.collection === collection
  );

  return (
    <div className="min-h-screen bg-[#07090D] text-white">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-24 lg:px-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
          ← Torna alle Collezioni
        </Link>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#3A7DFF]">
          Collezioni
        </p>

<h1 className="font-syne text-4xl font-semibold sm:text-5xl">
  {selectedCollection?.name ?? "Collezione"}
</h1>

        {selectedCollection?.description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {selectedCollection.description}
          </p>
        )}

        {/* Hero */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10">
          <div className="relative h-[320px] sm:h-[420px]">
            <img
              src={`/images/doors/${collection}.webp`}
              alt={selectedCollection?.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative flex h-full items-end p-10">
              <div>
                <h2 className="font-syne text-5xl font-bold text-white">
                  {selectedCollection?.name}
                </h2>

                {selectedCollection?.description && (
                  <p className="mt-4 max-w-xl text-lg text-zinc-200">
                    {selectedCollection.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-syne text-2xl font-semibold sm:text-3xl">
            Modelli disponibili
          </h2>
        </div>

        {collectionDoors.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {collectionDoors.map((door) => (
              <DoorCard
                key={door.id}
                id={door.id}
                name={door.name}
                image={door.image}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-zinc-300 backdrop-blur-xl">
            Catalogo in aggiornamento
          </div>
        )}
      </main>
    </div>
  );
}
