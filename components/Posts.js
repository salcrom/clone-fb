import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, query, orderBy } from "firebase/firestore"
import { db } from '../firebase'
import { Post } from './Post';


export const Posts = () => {

    const [realtimePosts] = useCollection(
        query(collection(db, 'posts'), orderBy("timestamp", "desc"))
    )
    


    return (
        <div>
            {realtimePosts?.docs.map(post => (
                <Post
                    key={post.id}
                    name={post.data().name}
                    message={post.data().message}
                    email={post.data().email}
                    timestamp={post.data().timestamp}
                    image={post.data().image}
                    postImage={post.data().postImage}
                />
            ))}
        </div>
    )
}
