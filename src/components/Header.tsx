type HeaderPropsType = { title: string };

export function Header({ title }: HeaderPropsType) {
  return <h1>{title}</h1>;
}
