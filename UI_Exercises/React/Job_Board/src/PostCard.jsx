export default function PostCard({ id, time, title, url }) {
  const indexToSlice = title.split('').findIndex(el => el === ')');

  const jobTitle = title.slice(0, indexToSlice + 1);
  const description = title.slice(indexToSlice + 1);

  const newUurl =
    url !== undefined ? url : `https://news.ycombinator.com/item?id=${id}`;

  const formattedDate = new Date(time).toDateString();

  return (
    <div className="post-card">
      <h5>{jobTitle}</h5>
      <div>{description}</div>
      <a href={newUurl} target="_blank" rel="noreferrer">
        See Post
      </a>
      <div>{formattedDate}</div>
    </div>
  );
}
