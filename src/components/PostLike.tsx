export default function PostLike() {
  return (
    <button
      onClick={() => alert("Like")}
      className='px-3 py-1 rounded-md bg-blue-500 text-white'
    >
      {/* <span>👍</span>
      <span>Like</span> */}
      Like
    </button>
  );
}
