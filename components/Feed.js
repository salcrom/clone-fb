import { InputBox } from './InputBox'
import { Posts } from './Posts'
import { Stories } from './Stories'




export const Feed = () => {
    return (
        <div className="flew-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                {/* Stories */}
                <Stories />
                {/* InputBox */}
                <InputBox />
                {/* Posts */}
                <Posts />
            </div>
        </div>
    )
}
