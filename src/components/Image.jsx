export default function Image({ props }) {
  const { src, credits } = props;
  return (
    <>
      <img src={src} />
      <div>{credits}</div>
    </>
  );
}

/*

Photo by
        <a href="https://unsplash.com/@tumbao1949?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          James Wainscoat
        </a>
        on
        <a href="https://unsplash.com/photos/3gcvyW8zHqY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
*/
