import { Comment } from "@/types/comment";
import { formatDate } from "@/utils/formatDate";
import { capitalizeFirstLetter } from "@/utils/truncate";
import Image from 'next/image';

interface Props {
    comments: Comment[];
}

export default function CommentContainer({ comments }: Props) {
    return (
        <div className="bg-gray-100 rounded-lg max-h-[350px] overflow-y-auto">
            <div className="space-y-0.5">
                {comments.map(comment => (

                    <div key={comment.id} className="rounded-lg flex flex-col p-4 bg-white max-w-2xl">
                        {/* Header Section */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                {comment.user.profileImageUrl ? (
                                    <Image
                                        width={40}
                                        height={40}
                                        src={comment.user.profileImageUrl}
                                        alt={comment.user.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="bg-green-500 text-white flex items-center justify-center w-full h-full">
                                        {capitalizeFirstLetter(comment.user.name)}
                                    </div>
                                )}
                            </div>
                            <span className="font-medium text-gray-900 text-lg">
                                {comment.user.name}
                            </span>
                        </div>

                        {/* Meta Section */}
                        <div className="text-gray-400 text-sm">
                            {formatDate(comment.createdAt)}
                        </div>

                        {/* Body Section */}
                        <div className="text-gray-800 leading-relaxed text-base">
                            {comment.comment}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};