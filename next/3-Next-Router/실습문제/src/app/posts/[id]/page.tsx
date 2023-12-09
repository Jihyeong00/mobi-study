import { PostType } from '@/app/posts/page';
import { notFound } from 'next/navigation';

const fetchData = async (postId: string): Promise<PostType> => {
  const todo = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (todo.status === 404) notFound();
  // notFound 메소드를 통해서 없는 페이지로 만들어버립니다.
  return await todo.json();
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id, body, title, userId } = await fetchData(params.id);
  return (
    <table>
      <tr>
        <td>글 번호</td>
        <td>{id}</td>
      </tr>
      <tr>
        <td>제목</td>
        <td>{title}</td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>{userId}</td>
      </tr>
      <tr>
        <td>내용</td>
        <td>{body}</td>
      </tr>
    </table>
  );
};

export default page;
