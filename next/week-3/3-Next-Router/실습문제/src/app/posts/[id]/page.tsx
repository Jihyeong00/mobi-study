import {PostType} from "@/app/posts/page";

const fetchData = async (postId: string): Promise<PostType> => {
    const todo = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return await todo.json()
}

const page = async ({params}: { params: { id: string } }) => {
    const {id, body, title, userId} = await fetchData(params.id)
    return <table>
        <tr>
            <td>글 번호</td>
            <td>{id}</td>
        </tr>
        <tr>
            <td>제목</td>
            <td>{userId}</td>
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
}

export default page