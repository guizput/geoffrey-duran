interface GalleryProps {
  title: string;
  description: string;
  items: string[];
}

export default function Gallery({ title, description, items }: GalleryProps) {
  return (
    <section className="py-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <img src={item} alt="" className="rounded-lg " key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
