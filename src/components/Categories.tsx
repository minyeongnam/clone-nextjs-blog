interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="categories">
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={category === selected ? "active" : ""}
            onClick={() => onClick(category)}
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
