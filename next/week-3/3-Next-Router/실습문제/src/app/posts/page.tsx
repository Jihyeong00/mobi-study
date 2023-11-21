import Link from "next/link";

export interface PostType {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchData = async (): Promise<PostType[]> => {
    const todoList = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await todoList.json()
}

const page = async () => {
    const data = await fetchData()

    return <table>
        <tr>
            <th>글 번호</th>
            <th>글 제목</th>
            <th>글 내용</th>
            <th>작성자 아이디</th>
        </tr>
        {
            data.map(value => <tr key={value.id}>
                <td>{value.id}</td>
                <td><Link href={`posts/${value.id}`}>{value.title}</Link></td>
                <td>{value.body}</td>
                <td>{value.userId}</td>
            </tr>)
        }
    </table>
}

export default page